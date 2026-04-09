import { Client } from '@notionhq/client'
import type { Route, CountryRoute, RouteDataMap } from './types'

// Fallback data - exact copy from the original index.html routeData object
const fallbackData: RouteDataMap = {
  uk: {
    name: "英国", flag: "🇬🇧",
    routes: [
      { name: "直飞限时达", badge: "超时赔付", badgeColor: "primary-container", subtitle: "全能型 · DPD派送 · 免税清关", time: "6-12天", price: "¥192", unit: "2kg起", features: ["品牌/普货/美妆/食品/保健品", "直飞航班+DPD派送", "超时赔付最高50%运费"], tags: ["全品类", "超时赔付", "DPD"], highlight: true },
      { name: "直飞专线", badge: "时效快", subtitle: "皇家邮政48h派送 · 免税", time: "7-13天", price: "¥140", unit: "2kg起", features: ["品牌衣物/鞋包/玩具/带电", "香港直飞+皇家邮政", "双清包税省心"], tags: ["品牌", "直飞", "皇邮"] },
      { name: "服装快线", badge: "服装专属", subtitle: "品牌服装专属通道 · 皇邮48h", time: "8-13天", price: "¥158", unit: "2kg起", features: ["品牌/普通服装鞋履箱包", "皇家邮政48h派送", "免税清关通过率高"], tags: ["服装", "品牌", "皇邮"] },
      { name: "鞋包专线", badge: "计实重", badgeColor: "tertiary-container", subtitle: "按实际重量计费 · 可保留鞋盒", time: "10-16天", price: "¥136", unit: "2kg起", features: ["按实重计费，不算泡重", "品牌衣物/鞋/包/带电", "可保留鞋盒，体积货福音"], tags: ["实重", "品牌", "鞋盒"] },
      { name: "美妆专线", badge: "全品类", subtitle: "液体膏体口红眼影 · 皇邮派送", time: "8-16天", price: "¥124", unit: "2kg起", features: ["液体/膏体/粉状/口红/眼影", "食品保健品也可寄", "免税清关通关率99%+"], tags: ["美妆", "液体", "食品"] },
      { name: "UK免税特价", badge: "超值", subtitle: "普货经济优选 · 皇邮48h", time: "10-18天", price: "¥112", unit: "2kg起", features: ["普通货物运输", "皇家邮政48h派送", "英国普货最低价"], tags: ["普货", "低价", "皇邮"] },
      { name: "商业大货专线", badge: "批量", subtitle: "5kg起 · DPD派送 · 免税", time: "7-12天", price: "¥320", unit: "5kg起", features: ["品牌/盲盒/带电/食品/书籍", "DPD派送大包裹", "批量发货商业首选"], tags: ["批量", "DPD", "大件"] },
      { name: "DPD特快小包", badge: "DPD", subtitle: "普货直飞 · DPD本地配送", time: "6-12天", price: "¥156", unit: "2kg起", features: ["普货日常衣物鞋靴家居", "直飞英国稳定航班", "DPD派送妥投率高"], tags: ["普货", "DPD", "直飞"] },
      { name: "DPD特货小包", badge: "DPD全能", subtitle: "全能专线 · DPD派送 · 免税", time: "8-15天", price: "¥172", unit: "2kg起", features: ["普货/品牌/化妆品/食品/保健品", "DPD派送服务", "免税清关通关率99%+"], tags: ["全能", "DPD", "美妆"] },
      { name: "英国海运-P", badge: "海运", subtitle: "经济型普货海运 · DPD/皇邮", time: "45-70天", price: "¥282", unit: "15kg起", features: ["普货/带电产品", "头程海运末端快递", "免税渠道价格最低"], tags: ["海运", "大批量", "经济"] },
      { name: "英国海运-M", badge: "海运全能", subtitle: "全能海运线路 · 品类最广", time: "45-70天", price: "¥341", unit: "15kg起", features: ["品牌/肉类/药品/保健品/带电", "全能海运经济型线路", "大批量囤货出口首选"], tags: ["海运", "全能", "品牌"] }
    ]
  },
  us: {
    name: "美国", flag: "🇺🇸",
    routes: [
      { name: "美国免税专线", badge: "主推", badgeColor: "primary-container", subtitle: "品牌鞋服首选 · USPS派送", time: "7-14天", price: "¥343", unit: "2kg起", features: ["品牌衣服/鞋子/帽子/包包", "USPS末端派送", "免税清关稳定可靠"], tags: ["品牌", "免税", "USPS"], highlight: true },
      { name: "US服装专线", badge: "服装", subtitle: "品牌服装专属 · 免税通过率高", time: "11-18天", price: "¥286", unit: "2kg起", features: ["品牌类服装专属通道", "免税清关模式", "USPS/UNI派送"], tags: ["服装", "品牌", "免税"] },
      { name: "US化妆品小包", badge: "美妆", subtitle: "美妆出海专属线路", time: "6-13天", price: "¥285", unit: "2kg起", features: ["化妆品专属小包线路", "时效较快6-13天", "适合美妆类商品"], tags: ["美妆", "小包"] },
      { name: "普货快线", badge: "快速", subtitle: "普货经济快线 · 性价比高", time: "5-11天", price: "¥236", unit: "2kg起", features: ["普货类商品运输", "时效较快5-11天", "经济实惠首选"], tags: ["普货", "快线"] },
      { name: "UPS包税专线", badge: "UPS", subtitle: "国际大牌物流 · 包税安心", time: "7-15天", price: "¥401", unit: "2kg起", features: ["UPS全程运输", "包税无忧", "适合高价值商品"], tags: ["UPS", "包税"] },
      { name: "DHL限时达", badge: "极速", badgeColor: "tertiary-container", subtitle: "DHL时效最快 · 2-8天签收", time: "2-8天", price: "¥593", unit: "2kg起", features: ["DHL全程运输", "2-8天极速签收", "包税方案"], tags: ["DHL", "极速", "包税"] },
      { name: "US海运经济线", badge: "海运", subtitle: "经济海运方案 · 大批量首选", time: "25-38天", price: "¥300", unit: "15kg起", features: ["海运经济线路", "适合大批量发货", "价格优惠"], tags: ["海运", "大批量", "经济"] }
    ]
  },
  ca: {
    name: "加拿大", flag: "🇨🇦",
    routes: [
      { name: "CA鞋包专线", badge: "计实重", badgeColor: "primary-container", subtitle: "按实重计费 · 可保留鞋盒", time: "12-15天", price: "咨询客服", unit: "", features: ["品牌衣物/鞋/包/带电", "按实际重量计费", "可保留鞋盒"], tags: ["实重", "品牌", "鞋盒"], highlight: true },
      { name: "CA全能专线", badge: "全能", subtitle: "品类最广 · 免税清关", time: "12-15天", price: "咨询客服", unit: "", features: ["品牌/盲盒/带电/食品/书籍/刀具", "Uniuni/邮政派送", "免税清关时效稳定"], tags: ["全能", "免税"] },
      { name: "CA服装专线", badge: "服装", subtitle: "品牌服装专属通道", time: "10-14天", price: "咨询客服", unit: "", features: ["品牌/普通服装", "混合末端派送", "免税清关"], tags: ["服装", "品牌"] },
      { name: "CA美妆专线", badge: "美妆", subtitle: "美妆护肤专属线路", time: "10-14天", price: "咨询客服", unit: "", features: ["美妆护肤类商品", "免税清关模式", "混合末端派送"], tags: ["美妆", "免税"] },
      { name: "CA海运", badge: "海运", subtitle: "经济海运方案", time: "30-35天", price: "咨询客服", unit: "", features: ["普货/全能海运", "经济型大批量", "免税渠道"], tags: ["海运", "大批量"] }
    ]
  },
  au: {
    name: "澳大利亚", flag: "🇦🇺",
    routes: [
      { name: "AU服装专线", badge: "计实重", badgeColor: "primary-container", subtitle: "品牌服装鞋包 · 按实重计费", time: "10-15天", price: "咨询客服", unit: "", features: ["品牌类服装鞋包", "按实重计费", "AUPOST末端派送"], tags: ["实重", "品牌", "AUPOST"], highlight: true },
      { name: "轻小件普货免税", badge: "轻小件", subtitle: "50g进位 · 澳邮派送", time: "10-15天", price: "咨询客服", unit: "", features: ["普货轻小件", "计费系数/8000", "澳大利亚邮政派送"], tags: ["普货", "轻小件", "免税"] }
    ]
  },
  de: {
    name: "德国", flag: "🇩🇪",
    routes: [
      { name: "直飞极速(超时赔付)", badge: "超时赔付", badgeColor: "primary-container", subtitle: "全能线路 · DPD派送 · 超时赔付", time: "6-15天", price: "咨询客服", unit: "", features: ["普货/品牌/美妆/食品/保健品", "直飞航班+DPD派送", "超15天退还50%运费"], tags: ["全能", "超时赔付", "DPD"], highlight: true }
    ]
  },
  it: {
    name: "意大利", flag: "🇮🇹",
    routes: [
      { name: "服装快线", badge: "服装专属", badgeColor: "primary-container", subtitle: "品牌服装鞋包 · DPD派送", time: "8-15天", price: "咨询客服", unit: "", features: ["品牌/普通服装鞋履箱包", "DPD派送妥投稳定", "免税清关时效稳定"], tags: ["服装", "DPD", "免税"], highlight: true }
    ]
  },
  se: {
    name: "瑞典", flag: "🇸🇪",
    routes: [
      { name: "鞋包专线(计实重)", badge: "计实重", badgeColor: "primary-container", subtitle: "按实重计费 · 可保留鞋盒", time: "12-18天", price: "咨询客服", unit: "", features: ["品牌衣物/鞋/包/带电", "按实际重量计费", "可保留鞋盒"], tags: ["实重", "品牌", "鞋盒"], highlight: true }
    ]
  },
  nl: {
    name: "荷兰", flag: "🇳🇱",
    routes: [
      { name: "全能卡航", badge: "经济首选", badgeColor: "primary-container", subtitle: "卡航运输 · DPD派送 · 免税", time: "15-25天", price: "咨询客服", unit: "", features: ["品牌/肉类/药品/保健品/带电", "卡航+DPD末端派送", "免税渠道性价比高"], tags: ["全能", "卡航", "DPD"], highlight: true }
    ]
  },
  no: {
    name: "挪威", flag: "🇳🇴",
    routes: [
      { name: "NO服装专线", badge: "服装", badgeColor: "primary-container", subtitle: "品牌服装 · Helthjem派送", time: "10-18天", price: "咨询客服", unit: "", features: ["品牌类服装商品", "双清包税可保价", "Helthjem高效派送"], tags: ["服装", "包税", "品牌"], highlight: true }
    ]
  },
  fr: {
    name: "法国", flag: "🇫🇷",
    routes: [
      { name: "法国专线", badge: "即将上线", subtitle: "法国线路规划中", time: "待定", price: "咨询客服", unit: "", features: ["线路规划中", "敬请期待", "可咨询客服获取最新信息"], tags: ["即将上线"] }
    ]
  },
  es: {
    name: "西班牙", flag: "🇪🇸",
    routes: [
      { name: "西班牙专线", badge: "即将上线", subtitle: "西班牙线路规划中", time: "待定", price: "咨询客服", unit: "", features: ["线路规划中", "敬请期待", "可咨询客服获取最新信息"], tags: ["即将上线"] }
    ]
  },
  pl: {
    name: "波兰", flag: "🇵🇱",
    routes: [
      { name: "波兰专线", badge: "即将上线", subtitle: "波兰线路规划中", time: "待定", price: "咨询客服", unit: "", features: ["线路规划中", "敬请期待", "可咨询客服获取最新信息"], tags: ["即将上线"] }
    ]
  }
}

function getPlainText(richText: any[]): string {
  if (!richText || !Array.isArray(richText)) return ''
  return richText.map((t: any) => t.plain_text || '').join('')
}

async function fetchFromNotion(): Promise<RouteDataMap | null> {
  const apiKey = process.env.NOTION_API_KEY
  const countriesDbId = process.env.NOTION_COUNTRIES_DB_ID
  const routesDbId = process.env.NOTION_ROUTES_DB_ID

  if (!apiKey || !countriesDbId || !routesDbId) return null

  try {
    const notion = new Client({ auth: apiKey })

    // Fetch countries
    const countriesRes = await notion.databases.query({
      database_id: countriesDbId,
      filter: { property: 'Active', checkbox: { equals: true } },
      sorts: [{ property: 'Sort Order', direction: 'ascending' }],
    })

    const countryMap: Record<string, { code: string; name: string; flag: string }> = {}
    const countryIdToCode: Record<string, string> = {}

    for (const page of countriesRes.results) {
      const props = (page as any).properties
      const code = getPlainText(props['Code']?.rich_text)
      const name = props['Name']?.title?.[0]?.plain_text || ''
      const flag = getPlainText(props['Flag']?.rich_text)
      if (code) {
        countryMap[code] = { code, name, flag }
        countryIdToCode[page.id] = code
      }
    }

    // Fetch routes
    const routesRes = await notion.databases.query({
      database_id: routesDbId,
      filter: { property: 'Active', checkbox: { equals: true } },
      sorts: [{ property: 'Sort Order', direction: 'ascending' }],
    })

    const result: RouteDataMap = {}

    // Init country entries
    for (const [code, country] of Object.entries(countryMap)) {
      result[code] = { name: country.name, flag: country.flag, routes: [] }
    }

    for (const page of routesRes.results) {
      const props = (page as any).properties
      const countryRelation = props['Country']?.relation?.[0]?.id
      const countryCode = countryRelation ? countryIdToCode[countryRelation] : null
      if (!countryCode || !result[countryCode]) continue

      const featuresText = getPlainText(props['Features']?.rich_text)
      const features = featuresText ? featuresText.split('\n').filter((f: string) => f.trim()) : []
      const tags = (props['Tags']?.multi_select || []).map((t: any) => t.name)

      const badgeColorRaw = props['Badge Color']?.select?.name || ''
      let badgeColor: string | undefined
      if (badgeColorRaw === 'primary') badgeColor = 'primary-container'
      else if (badgeColorRaw === 'tertiary') badgeColor = 'tertiary-container'

      const route: Route = {
        name: props['Name']?.title?.[0]?.plain_text || '',
        badge: getPlainText(props['Badge']?.rich_text),
        ...(badgeColor ? { badgeColor } : {}),
        subtitle: getPlainText(props['Subtitle']?.rich_text),
        time: getPlainText(props['Time']?.rich_text),
        price: getPlainText(props['Price']?.rich_text),
        unit: getPlainText(props['Unit']?.rich_text),
        features,
        tags,
        highlight: props['Highlight']?.checkbox || false,
      }

      result[countryCode].routes.push(route)
    }

    return result
  } catch (error) {
    console.error('Failed to fetch from Notion:', error)
    return null
  }
}

export async function getRouteData(): Promise<RouteDataMap> {
  const notionData = await fetchFromNotion()
  if (notionData) {
    console.log('[Notion] Data fetched successfully')
    return notionData
  }
  console.log('[Fallback] Using hardcoded route data')
  return fallbackData
}

// English fallback data for /b2b page
const fallbackDataEN: RouteDataMap = {
  uk: {
    name: "United Kingdom", flag: "🇬🇧",
    routes: [
      { name: "Express Direct Flight", badge: "Delay Guarantee", badgeColor: "primary-container", subtitle: "All-category · DPD delivery · Tax-free clearance", time: "6-12 days", price: "¥192", unit: "from 2kg", features: ["Branded/general/cosmetics/food/supplements", "Direct flight + DPD last-mile", "Up to 50% refund for delays"], tags: ["All-category", "Guaranteed", "DPD"], highlight: true },
      { name: "Direct Air Line", badge: "Fast", subtitle: "Royal Mail 48h delivery · Tax-free", time: "7-13 days", price: "¥140", unit: "from 2kg", features: ["Branded apparel/shoes/toys/electronics", "HK direct flight + Royal Mail", "Dual clearance, worry-free"], tags: ["Branded", "Direct", "Royal Mail"] },
      { name: "Apparel Express", badge: "Apparel", subtitle: "Branded apparel channel · Royal Mail 48h", time: "8-13 days", price: "¥158", unit: "from 2kg", features: ["Branded/general apparel & shoes", "Royal Mail 48h delivery", "High customs clearance rate"], tags: ["Apparel", "Branded", "Royal Mail"] },
      { name: "Shoes & Bags Line", badge: "Actual Weight", badgeColor: "tertiary-container", subtitle: "Billed by actual weight · Keep shoeboxes", time: "10-16 days", price: "¥136", unit: "from 2kg", features: ["Billed by actual weight, not volumetric", "Branded apparel/shoes/bags/electronics", "Keep shoeboxes — ideal for bulky items"], tags: ["Actual Wt", "Branded", "Shoebox"] },
      { name: "Cosmetics Line", badge: "All-category", subtitle: "Liquids, creams, lipstick · Royal Mail", time: "8-16 days", price: "¥124", unit: "from 2kg", features: ["Liquids/creams/powder/lipstick/eyeshadow", "Food & supplements also accepted", "99%+ customs clearance rate"], tags: ["Cosmetics", "Liquids", "Food"] },
      { name: "UK Tax-Free Value", badge: "Value", subtitle: "General cargo economy · Royal Mail 48h", time: "10-18 days", price: "¥112", unit: "from 2kg", features: ["General cargo shipping", "Royal Mail 48h delivery", "Lowest UK general cargo rate"], tags: ["General", "Budget", "Royal Mail"] },
      { name: "Commercial Bulk Line", badge: "Bulk", subtitle: "5kg+ · DPD delivery · Tax-free", time: "7-12 days", price: "¥320", unit: "from 5kg", features: ["Branded/blind boxes/electronics/food/books", "DPD large parcel delivery", "Best for bulk commercial shipping"], tags: ["Bulk", "DPD", "Large"] },
      { name: "DPD Express Small", badge: "DPD", subtitle: "General cargo direct flight · DPD local", time: "6-12 days", price: "¥156", unit: "from 2kg", features: ["General daily apparel & homeware", "Direct flight, stable schedule", "DPD high delivery success rate"], tags: ["General", "DPD", "Direct"] },
      { name: "DPD All-Category Small", badge: "DPD Full", subtitle: "All-category · DPD delivery · Tax-free", time: "8-15 days", price: "¥172", unit: "from 2kg", features: ["General/branded/cosmetics/food/supplements", "DPD delivery service", "99%+ customs clearance rate"], tags: ["Full", "DPD", "Cosmetics"] },
      { name: "UK Sea Freight - P", badge: "Sea", subtitle: "Economy general cargo · DPD/Royal Mail", time: "45-70 days", price: "¥282", unit: "from 15kg", features: ["General cargo / electronics", "Ocean freight + last-mile courier", "Tax-free, lowest cost channel"], tags: ["Sea", "Bulk", "Economy"] },
      { name: "UK Sea Freight - M", badge: "Sea Full", subtitle: "All-category ocean line · Widest coverage", time: "45-70 days", price: "¥341", unit: "from 15kg", features: ["Branded/meat/pharma/supplements/electronics", "All-category ocean economy line", "Best for large-volume export"], tags: ["Sea", "Full", "Branded"] }
    ]
  },
  us: {
    name: "United States", flag: "🇺🇸",
    routes: [
      { name: "US Tax-Free Line", badge: "Featured", badgeColor: "primary-container", subtitle: "Branded shoes & apparel · USPS delivery", time: "7-14 days", price: "¥343", unit: "from 2kg", features: ["Branded apparel/shoes/hats/bags", "USPS last-mile delivery", "Reliable tax-free clearance"], tags: ["Branded", "Tax-free", "USPS"], highlight: true },
      { name: "US Apparel Line", badge: "Apparel", subtitle: "Branded apparel · High clearance rate", time: "11-18 days", price: "¥286", unit: "from 2kg", features: ["Branded apparel dedicated channel", "Tax-free clearance mode", "USPS/UNI delivery"], tags: ["Apparel", "Branded", "Tax-free"] },
      { name: "US Cosmetics Small", badge: "Cosmetics", subtitle: "Cosmetics export dedicated line", time: "6-13 days", price: "¥285", unit: "from 2kg", features: ["Cosmetics dedicated small parcel", "Fast 6-13 day delivery", "Ideal for beauty products"], tags: ["Cosmetics", "Small"] },
      { name: "General Express", badge: "Fast", subtitle: "General cargo economy · High value", time: "5-11 days", price: "¥236", unit: "from 2kg", features: ["General cargo shipping", "Fast 5-11 day delivery", "Best economy option"], tags: ["General", "Express"] },
      { name: "UPS Tax-Inclusive", badge: "UPS", subtitle: "International carrier · Tax included", time: "7-15 days", price: "¥401", unit: "from 2kg", features: ["UPS full-service shipping", "Tax included, worry-free", "Ideal for high-value goods"], tags: ["UPS", "Tax-incl"] },
      { name: "DHL Express", badge: "Fastest", badgeColor: "tertiary-container", subtitle: "DHL fastest · 2-8 day delivery", time: "2-8 days", price: "¥593", unit: "from 2kg", features: ["DHL full-service shipping", "2-8 day express delivery", "Tax-inclusive option"], tags: ["DHL", "Express", "Tax-incl"] },
      { name: "US Sea Freight Economy", badge: "Sea", subtitle: "Ocean economy · Best for bulk", time: "25-38 days", price: "¥300", unit: "from 15kg", features: ["Ocean economy line", "Ideal for bulk shipments", "Budget-friendly pricing"], tags: ["Sea", "Bulk", "Economy"] }
    ]
  },
  ca: {
    name: "Canada", flag: "🇨🇦",
    routes: [
      { name: "CA Shoes & Bags", badge: "Actual Weight", badgeColor: "primary-container", subtitle: "Billed by actual weight · Keep shoeboxes", time: "12-15 days", price: "Contact Us", unit: "", features: ["Branded apparel/shoes/bags/electronics", "Billed by actual weight", "Keep shoeboxes"], tags: ["Actual Wt", "Branded", "Shoebox"], highlight: true },
      { name: "CA All-Category", badge: "Full", subtitle: "Widest coverage · Tax-free clearance", time: "12-15 days", price: "Contact Us", unit: "", features: ["Branded/blind boxes/electronics/food/books/knives", "Uniuni/postal delivery", "Tax-free, stable delivery"], tags: ["Full", "Tax-free"] },
      { name: "CA Apparel Line", badge: "Apparel", subtitle: "Branded apparel dedicated channel", time: "10-14 days", price: "Contact Us", unit: "", features: ["Branded/general apparel", "Mixed last-mile delivery", "Tax-free clearance"], tags: ["Apparel", "Branded"] },
      { name: "CA Cosmetics Line", badge: "Cosmetics", subtitle: "Cosmetics & skincare dedicated", time: "10-14 days", price: "Contact Us", unit: "", features: ["Cosmetics & skincare products", "Tax-free clearance", "Mixed last-mile delivery"], tags: ["Cosmetics", "Tax-free"] },
      { name: "CA Sea Freight", badge: "Sea", subtitle: "Ocean economy option", time: "30-35 days", price: "Contact Us", unit: "", features: ["General/all-category ocean", "Economy bulk shipping", "Tax-free channel"], tags: ["Sea", "Bulk"] }
    ]
  },
  au: {
    name: "Australia", flag: "🇦🇺",
    routes: [
      { name: "AU Apparel Line", badge: "Actual Weight", badgeColor: "primary-container", subtitle: "Branded apparel & shoes · Actual weight billing", time: "10-15 days", price: "Contact Us", unit: "", features: ["Branded apparel, shoes & bags", "Billed by actual weight", "Australia Post last-mile"], tags: ["Actual Wt", "Branded", "AusPost"], highlight: true },
      { name: "Light Small Items Tax-Free", badge: "Light", subtitle: "50g increment · Australia Post", time: "10-15 days", price: "Contact Us", unit: "", features: ["General cargo light items", "Volume factor /8000", "Australia Post delivery"], tags: ["General", "Light", "Tax-free"] }
    ]
  },
  de: {
    name: "Germany", flag: "🇩🇪",
    routes: [
      { name: "Express Direct (Delay Guarantee)", badge: "Delay Guarantee", badgeColor: "primary-container", subtitle: "All-category · DPD delivery · Delay compensation", time: "6-15 days", price: "Contact Us", unit: "", features: ["General/branded/cosmetics/food/supplements", "Direct flight + DPD delivery", "50% refund if >15 days delayed"], tags: ["Full", "Guaranteed", "DPD"], highlight: true }
    ]
  },
  it: {
    name: "Italy", flag: "🇮🇹",
    routes: [
      { name: "Apparel Express", badge: "Apparel", badgeColor: "primary-container", subtitle: "Branded apparel & shoes · DPD delivery", time: "8-15 days", price: "Contact Us", unit: "", features: ["Branded/general apparel, shoes & bags", "DPD delivery, stable performance", "Tax-free, reliable clearance"], tags: ["Apparel", "DPD", "Tax-free"], highlight: true }
    ]
  },
  se: {
    name: "Sweden", flag: "🇸🇪",
    routes: [
      { name: "Shoes & Bags (Actual Weight)", badge: "Actual Weight", badgeColor: "primary-container", subtitle: "Billed by actual weight · Keep shoeboxes", time: "12-18 days", price: "Contact Us", unit: "", features: ["Branded apparel/shoes/bags/electronics", "Billed by actual weight", "Keep shoeboxes"], tags: ["Actual Wt", "Branded", "Shoebox"], highlight: true }
    ]
  },
  nl: {
    name: "Netherlands", flag: "🇳🇱",
    routes: [
      { name: "All-Category Truck-Air", badge: "Economy Pick", badgeColor: "primary-container", subtitle: "Truck-air transit · DPD delivery · Tax-free", time: "15-25 days", price: "Contact Us", unit: "", features: ["Branded/meat/pharma/supplements/electronics", "Truck-air + DPD last-mile", "Tax-free, great value"], tags: ["Full", "Truck-Air", "DPD"], highlight: true }
    ]
  },
  no: {
    name: "Norway", flag: "🇳🇴",
    routes: [
      { name: "NO Apparel Line", badge: "Apparel", badgeColor: "primary-container", subtitle: "Branded apparel · Helthjem delivery", time: "10-18 days", price: "Contact Us", unit: "", features: ["Branded apparel", "Dual clearance, insurable", "Helthjem efficient delivery"], tags: ["Apparel", "Tax-incl", "Branded"], highlight: true }
    ]
  },
  fr: {
    name: "France", flag: "🇫🇷",
    routes: [
      { name: "France Line", badge: "Coming Soon", subtitle: "France route in planning", time: "TBD", price: "Contact Us", unit: "", features: ["Route in planning", "Stay tuned", "Contact us for latest info"], tags: ["Coming Soon"] }
    ]
  },
  es: {
    name: "Spain", flag: "🇪🇸",
    routes: [
      { name: "Spain Line", badge: "Coming Soon", subtitle: "Spain route in planning", time: "TBD", price: "Contact Us", unit: "", features: ["Route in planning", "Stay tuned", "Contact us for latest info"], tags: ["Coming Soon"] }
    ]
  },
  pl: {
    name: "Poland", flag: "🇵🇱",
    routes: [
      { name: "Poland Line", badge: "Coming Soon", subtitle: "Poland route in planning", time: "TBD", price: "Contact Us", unit: "", features: ["Route in planning", "Stay tuned", "Contact us for latest info"], tags: ["Coming Soon"] }
    ]
  }
}

export async function getRouteDataEN(): Promise<RouteDataMap> {
  const notionData = await fetchFromNotion()
  if (notionData) {
    console.log('[Notion] EN data fetched successfully')
    return notionData
  }
  console.log('[Fallback] Using English hardcoded route data')
  return fallbackDataEN
}
