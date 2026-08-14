import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  EN: {
    // Nav
    nav_features: 'Platform Modules',
    nav_console: 'Console Demo',
    nav_roi: 'ROI Calculator',
    nav_pricing: 'Pricing Plans',
    nav_demo_btn: 'Live Dashboard Demo',
    nav_trial_btn: 'Start 14-Day Trial',

    // Hero
    hero_badge: 'SHOPDY ALL-IN-ONE E-COMMERCE OPERATING SYSTEM',
    hero_title: 'Unify Your Stores, Marketing & Revenue Operations',
    hero_sub: 'Shopdy is the all-in-one e-commerce management platform designed to control multi-storefronts, track orders & inventory, manage team performance, run ad campaigns & email marketing, and automate multi-gateway payment processing.',
    hero_cta_trial: 'Start 14-Day Free Trial',
    hero_cta_demo: 'Explore Live Admin Console',
    hero_check1: 'No Credit Card Required',
    hero_check2: 'Sync Ads & Store Accounts',
    hero_check3: '5-Minute Setup',
    hero_core_title: 'Shopdy OS • Central Command Center',
    hero_core_status: 'System Operational',
    hero_core_trust: '1,200+ Active Online Stores',
    hero_core_saas: 'All-in-One SaaS',

    // Metrics
    metric_uptime: 'System Uptime SLA',
    metric_return: 'Net Profit Margin Boost',
    metric_conversion: 'Ad Spend ROAS Improvement',
    metric_surge: 'Monthly Orders Processed',

    // Brand Scroller
    brand_trusted: 'Empowering over 1,200+ Growing Online Stores & Multi-Brand Enterprises Worldwide',

    // Velocity Marquee
    marquee_items: [
      'EXECUTIVE DASHBOARD',
      'ORDERS & PRODUCTS',
      'TEAM PERFORMANCE',
      'ADS MANAGER & CREATIVES',
      'EMAIL MARKETING',
      'SYNC ACCOUNTS',
      'PAYMENT GATEWAYS',
    ],

    // Core Features
    features_badge: 'COMPREHENSIVE SHOPDY SYSTEM ARCHITECTURE',
    features_title: '3 Core Pillars Powering Your Entire',
    features_title_highlight: 'E-Commerce Enterprise',
    features_sub: 'Streamline business management, marketing campaigns, and system settings from a single intuitive platform.',
    features_explore: 'View System Capability Specs →',
    
    // Group 1: Business Management (Quản lý kinh doanh)
    cat_management: 'MANAGEMENT MODULE',
    feat_dash_title: 'Executive Financial Dashboard',
    feat_dash_tag: 'Business Analytics',
    feat_dash_desc: 'Real-time overview of critical financial KPIs: Revenue, Net Profit, Order Volume, Conversion Rates, and total Ad Spend ROAS.',

    feat_orders_title: 'Orders & Fulfillment Center',
    feat_orders_tag: 'Order Tracking',
    feat_orders_desc: 'Complete order management pipeline from purchase to fulfillment dispatch, customer status timelines, and shipping updates.',

    feat_products_title: 'Products & Inventory Matrix',
    feat_products_tag: 'SKU Stock Control',
    feat_products_desc: 'Centralized product catalogue, multi-variant inventory stock matrix, price updates, and automated reorder alerts.',

    feat_stores_title: 'Online Stores Hub',
    feat_stores_tag: 'Multi-Storefront',
    feat_stores_desc: 'Connect, customize, and manage multiple online storefronts and sales channels seamlessly from one unified hub.',

    feat_discounts_title: 'Discounts & Promotions Engine',
    feat_discounts_tag: 'Coupons & Sales',
    feat_discounts_desc: 'Create coupon codes, flash sale rules, automatic tiered discounts, and targeted promotional campaigns.',

    feat_media_title: 'Media Asset Manager',
    feat_media_tag: 'Cloud Asset Library',
    feat_media_desc: 'Centralized cloud storage for high-resolution product photos, promotional banners, lookbook media, and branding files.',

    feat_team_title: 'Team & Staff Performance',
    feat_team_tag: 'Role Access & Sales KPI',
    feat_team_desc: 'Manage team members with granular permission access, track staff productivity, and monitor individual sales revenue contributions.',

    // Group 2: Marketing Suite
    cat_marketing: 'MARKETING SUITE',
    feat_ads_title: 'Omnichannel Ads Manager',
    feat_ads_tag: 'Meta, Google & TikTok Ads',
    feat_ads_desc: 'Track and optimize multi-channel ad campaigns, monitor ad spend ROI, and manage audience targeting in real-time.',

    feat_creatives_title: 'Creatives Asset Studio',
    feat_creatives_tag: 'Ad Photos & Videos',
    feat_creatives_desc: 'Organize high-converting ad copy, photo sets, and video teasers for seamless ad creative workflow execution.',

    feat_email_title: 'Automated Email Marketing',
    feat_email_tag: 'Drip Campaigns & Cart Recovery',
    feat_email_desc: 'Send automated email drip campaigns, recover abandoned carts, and broadcast promotional newsletters to segmented customer lists.',

    feat_sync_title: 'Linked Account Sync',
    feat_sync_tag: 'OAuth Social Integration',
    feat_sync_desc: 'One-click account synchronization with Meta Commerce, TikTok Shop, Google Merchant Center, and social ad accounts.',

    // Group 3: System Manager
    cat_system: 'SYSTEM MANAGER',
    feat_settings_title: 'System Settings & Config',
    feat_settings_tag: 'Global Preferences',
    feat_settings_desc: 'Configure custom domains, localized currencies, tax rates, checkout rules, and system-wide security settings.',

    feat_payment_title: 'Multi-Gateway Payment Processing',
    feat_payment_tag: 'Payment Gateways',
    feat_payment_desc: 'Seamlessly process transactions with Stripe, Credit Cards, VietQR, MoMo, ZaloPay, Apple Pay, and local gateways.',

    // Console Demo
    demo_badge: 'INTERACTIVE SHOPDY SYSTEM CONSOLE',
    demo_title: 'Explore the 3 Core Modules of',
    demo_title_highlight: 'Shopdy Admin Console',
    demo_sub: 'Switch between Management, Marketing, and System Settings modules to experience how Shopdy unifies your e-commerce operations.',
    tab_1: '1. Business Management (Dashboard, Orders, Products, Team)',
    tab_2: '2. Marketing Suite (Ads, Creatives, Email, Account Sync)',
    tab_3: '3. System Manager (Settings & Payment Gateways)',
    demo_modal_btn: 'Launch Live Admin Console Modal',
    demo_view_lookbook: 'View Online Store',

    // ROI Calculator
    roi_badge: 'E-COMMERCE PROFIT & ROAS CALCULATOR',
    roi_title: 'Calculate Profit Boost & Ad Spend Savings With',
    roi_sub: 'Drag the sliders below to estimate annual operational efficiency gains and revenue growth achieved by unifying your business with Shopdy.',
    roi_orders_label: 'Monthly Order Volume:',
    roi_aov_label: 'Average Order Value (AOV):',
    roi_total_label: 'Estimated Annual Net Profit & Operational Savings Boost:',
    roi_return_saved: 'Saved Operations & Team Efficiency Costs:',
    roi_extra_rev: 'Ad Spend ROAS & Conversion Revenue Uplift:',
    roi_cta: 'Start Accelerating E-Commerce Revenue With Shopdy',

    // Testimonials
    test_badge: 'REAL MERCHANTS & E-COMMERCE FOUNDERS',
    test_title: 'Stores Scaling Higher Profits With',
    test_lookbook_title: '✦ Active Online Stores Connected To Shopdy Engine',

    // Pricing
    pricing_badge: 'TRANSPARENT PRICING PLANS — NO HIDDEN FEES',
    pricing_title: 'Choose the Right Plan for Your',
    pricing_title_highlight: 'E-Commerce Enterprise',
    pricing_sub: 'All plans include 14-day free access to Management, Marketing, and System Manager tools.',
    pricing_monthly: 'Billed Monthly',
    pricing_annual: 'Billed Annually',
    pricing_save_badge: 'Save 20%',
    pricing_popular: '✦ Most Popular Choice',

    // CTA Banner
    cta_badge: 'READY TO UNIFY YOUR E-COMMERCE BUSINESS?',
    cta_title: 'Launch Your Custom Online Store Control Tower in',
    cta_title_highlight: '60 Seconds',
    cta_sub: 'Experience complete control over Orders, Products, Team KPIs, Ads Manager, Email Marketing, and Payment Gateways. Instant trial activation.',
    cta_btn: 'Launch Shopdy Console',

    // Footer
    footer_desc: 'Shopdy is the All-in-One E-Commerce Operating System and Management Platform designed to streamline Online Stores, Orders, Team KPIs, Marketing Campaigns, and Payment Processing.',
    footer_status: 'Shopdy System Engine 3.0: 99.99% Operational SLA',
    footer_col_1: 'Management Modules',
    footer_col_2: 'Marketing & System',
    footer_col_3: 'Global Offices',
  },

  VI: {
    // Nav
    nav_features: 'Tính Năng Hệ Thống',
    nav_console: 'Bảng Điều Khiển Live',
    nav_roi: 'Tính Lợi Nhuận ROI',
    nav_pricing: 'Bảng Giá Gói Dịch Vụ',
    nav_demo_btn: 'Xem Live Dashboard',
    nav_trial_btn: 'Dùng Thử 14 Ngày',

    // Hero
    hero_badge: 'HỆ ĐIỀU HÀNH THƯƠNG MẠI ĐIỆN TỬ VÀ BÁN HÀNG TRỰC TUYẾN ALL-IN-ONE',
    hero_title: 'Quản Lý Cửa Hàng, Marketing & Doanh Thu Chi Tiết',
    hero_sub: 'Shopdy là hệ thống quản lý bán hàng trực tuyến toàn diện giúp bạn dễ dàng điều hành các cửa hàng online, đơn hàng, kho sản phẩm, thành viên nhóm, chiến dịch quảng cáo, email marketing và tích hợp cổng thanh toán.',
    hero_cta_trial: 'Khởi Tạo Dùng Thử 14 Ngày Miễn Phí',
    hero_cta_demo: 'Khám Phá Bảng Điều Khiển Admin Console',
    hero_check1: 'Không cần thẻ tín dụng',
    hero_check2: 'Đồng bộ tài khoản Quảng cáo & Store',
    hero_check3: 'Thiết lập trong 5 phút',
    hero_core_title: 'Shopdy OS • Trung Tâm Điều Hành Quản Lý',
    hero_core_status: 'Hệ Thống Hoạt Động',
    hero_core_trust: 'Hơn 1,200+ Cửa Hàng Online Đang Dùng',
    hero_core_saas: 'All-in-One SaaS',

    // Metrics
    metric_uptime: 'Cam Kết Uptime SLA Hệ Thống',
    metric_return: 'Tỉ Suất Lợi Nhuận Thuần (Net Profit)',
    metric_conversion: 'Tối Ưu Hiệu Quả Quảng Cáo ROAS',
    metric_surge: 'Đơn Hàng Xử Lý Hàng Tháng',

    // Brand Scroller
    brand_trusted: 'Được tin dùng bởi hơn 1,200+ Thương hiệu & Cửa hàng kinh doanh trực tuyến',

    // Velocity Marquee
    marquee_items: [
      'DASHBOARD TÀI CHÍNH',
      'ĐƠN HÀNG & SẢN PHẨM',
      'QUẢN LÝ TEAM NHÂN SỰ',
      'ADS MANAGER & CREATIVES',
      'EMAIL MARKETING',
      'ĐỒNG BỘ TÀI KHOẢN SYNC',
      'CỔNG THANH TOÁN PAYMENT',
    ],

    // Core Features
    features_badge: 'KIẾN TRÚC TÍNH NĂNG TOÀN DIỆN CỦA SHOPDY',
    features_title: '3 Phân Hệ Cốt Lõi Vận Hành',
    features_title_highlight: 'Hệ Thống Bán Hàng',
    features_sub: 'Tối ưu hóa quản lý kinh doanh, chiến dịch marketing và cài đặt hệ thống trên cùng một giao diện duy nhất.',
    features_explore: 'Xem thông số phân hệ kỹ thuật &rarr;',

    // Group 1: Business Management (Quản lý kinh doanh)
    cat_management: 'QUẢN LÝ KINH DOANH (MANAGEMENT)',
    feat_dash_title: 'Dashboard Tổng Quan Tài Chính',
    feat_dash_tag: 'Analytics & ROAS',
    feat_dash_desc: 'Tổng quan các chỉ số kinh doanh quan trọng realtime: Doanh thu, Lợi nhuận thuần, Số lượng đơn hàng, Tỷ lệ chuyển đổi và Chi phí quảng cáo (Ad spend).',

    feat_orders_title: 'Quản Lý Đơn Hàng (Orders)',
    feat_orders_tag: 'Tracking & Timeline',
    feat_orders_desc: 'Quản lý danh sách, trạng thái và thông tin chi tiết từng đơn hàng từ lúc đặt hàng đến khi đóng gói giao hàng thành công.',

    feat_products_title: 'Quản Lý Kho Hàng & Sản Phẩm (Products)',
    feat_products_tag: 'Kho & Biến Thể SKU',
    feat_products_desc: 'Quản lý kho hàng, danh mục sản phẩm, biến thể màu sắc/size, cập nhật giá và cảnh báo khi kho hàng sắp hết.',

    feat_stores_title: 'Quản Lý Cửa Hàng Trực Tuyến (Online Stores)',
    feat_stores_tag: 'Đa Cửa Hàng Central',
    feat_stores_desc: 'Kết nối và quản lý danh sách nhiều cửa hàng trực tuyến, kênh bán hàng trên cùng một trung tâm điều hành duy nhất.',

    feat_discounts_title: 'Mã Giảm Giá & Khuyến Mãi (Discounts)',
    feat_discounts_tag: 'Voucher & Flash Sale',
    feat_discounts_desc: 'Tạo và quản lý mã giảm giá, chương trình khuyến mãi, ưu đãi theo giá trị đơn hàng và chiến dịch Flash Sale.',

    feat_media_title: 'Quản Lý Tài Nguyên Truyền Thông (Media)',
    feat_media_tag: 'Cloud Asset Library',
    feat_media_desc: 'Kho lưu trữ đám mây quản lý hình ảnh sản phẩm, video banner, tài nguyên truyền thông và bộ nhận diện thương hiệu.',

    feat_team_title: 'Quản Lý Nhân Sự & Nhóm (Team)',
    feat_team_tag: 'Phân Quyền & Doanh Thu Team',
    feat_team_desc: 'Quản lý nhân sự trong nhóm, phân quyền truy cập và theo dõi hiệu suất làm việc, doanh thu đóng góp thực tế của từng cá nhân.',

    // Group 2: Marketing Suite
    cat_marketing: 'CHIẾN DỊCH MARKETING',
    feat_ads_title: 'Quản Lý Chiến Dịch Quảng Cáo (Ads Manager)',
    feat_ads_tag: 'Meta, Google & TikTok Ads',
    feat_ads_desc: 'Theo dõi và quản lý hiệu quả các chiến dịch quảng cáo đa nền tảng, đo lường chi phí Ad Spend và lợi nhuận ROAS.',

    feat_creatives_title: 'Quản Lý Nội Dung Sáng Tạo (Creatives)',
    feat_creatives_tag: 'Hình Ảnh & Video Content',
    feat_creatives_desc: 'Quản lý kho nội dung sáng tạo, hình ảnh, bài viết và video quảng cáo chuyển đổi cao cho đội ngũ marketing.',

    feat_email_title: 'Email Marketing Tiếp Thị Auto',
    feat_email_tag: 'Drip Mail & Cart Recovery',
    feat_email_desc: 'Gửi và quản lý các chiến dịch email tiếp thị tự động, gửi email khôi phục giỏ hàng bị bỏ quên và tin tức ưu đãi.',

    feat_sync_title: 'Đồng Bộ Tài Khoản Liên Kết (Sync Accounts)',
    feat_sync_tag: 'Social OAuth Sync',
    feat_sync_desc: 'Đồng bộ tự động các tài khoản liên kết (tài khoản quảng cáo Meta, TikTok Shop, Google Merchant, Mạng xã hội).',

    // Group 3: System Manager
    cat_system: 'QUẢN LÝ HỆ THỐNG (SYSTEM MANAGER)',
    feat_settings_title: 'Cài Đặt Hệ Thống (System Settings)',
    feat_settings_tag: 'Cấu Hình Chung',
    feat_settings_desc: 'Cài đặt chung cho hệ thống, tên miền custom, quy tắc thuế, tiền tệ hiển thị và bảo mật toàn bộ nền tảng.',

    feat_payment_title: 'Cổng Thanh Toán Transaction (Payment Gateway)',
    feat_payment_tag: 'Payment Gateways',
    feat_payment_desc: 'Tích hợp các cổng thanh toán uy tín để xử lý giao dịch an toàn: VietQR, MoMo, ZaloPay, Stripe, Thẻ quốc tế & COD.',

    // Console Demo
    demo_badge: 'DEMO TƯƠNG TÁC HỆ THỐNG SHOPDY OS',
    demo_title: 'Khám Phá 3 Phân Hệ Quản Lý Trong',
    demo_title_highlight: 'Shopdy Admin Console',
    demo_sub: 'Chuyển đổi giữa Quản lý kinh doanh, Marketing và Cài đặt hệ thống để trải nghiệm sự tiện lợi khi vận hành cùng Shopdy.',
    tab_1: '1. Quản Lý Kinh Doanh (Dashboard, Orders, Products, Stores, Team)',
    tab_2: '2. Marketing Suite (Ads Manager, Creatives, Email, Sync Accounts)',
    tab_3: '3. Quản Lý Hệ Thống (System Settings & Payment Gateways)',
    demo_modal_btn: 'Mở Live Admin Console Demo Modal',
    demo_view_lookbook: 'Xem Cửa Hàng Online',

    // ROI Calculator
    roi_badge: 'CÔNG CỤ TÍNH LỢI NHUẬN & HIỆU QUẢ VẬN HÀNH',
    roi_title: 'Tính Toán Lợi Nhuận & Tiết Kiệm Chi Phí Với',
    roi_sub: 'Kéo thanh trượt bên dưới để ước tính lượng chi phí vận hành sẽ tiết kiệm được và doanh thu tăng trưởng khi quản lý tập trung cùng Shopdy.',
    roi_orders_label: 'Số lượng đơn hàng / tháng:',
    roi_aov_label: 'Giá trị đơn hàng trung bình (AOV):',
    roi_total_label: 'Tổng Lợi Nhuận Thuần & Chi Phí Tiết Kiệm Dự Kiến / Năm:',
    roi_return_saved: 'Tiết kiệm chi phí nhân sự & vận hành thủ công:',
    roi_extra_rev: 'Doanh thu tăng thêm từ tối ưu quảng cáo & email:',
    roi_cta: 'Bắt Đầu Bứt Phá Doanh Thu Với Shopdy Ngay',

    // Testimonials
    test_badge: 'CÂU CHUYỆN THÀNH CÔNG TỪ CÁC CHỦ SHOP',
    test_title: 'Các Cửa Hàng Tăng Trưởng Doanh Thu Với',
    test_lookbook_title: '✦ Các Cửa Hàng Trực Tuyến Đang Kết Nối Với Shopdy Engine',

    // Pricing
    pricing_badge: 'BẢNG GIÁ DỊCH VỤ MINH BẠCH — KHÔNG PHÍ ẨN',
    pricing_title: 'Lựa Chọn Gói Phù Hợp Cho',
    pricing_title_highlight: 'Doanh Nghiệp Của Bạn',
    pricing_sub: 'Tất cả các gói đều bao gồm 14 ngày dùng thử đầy đủ tính năng Quản lý kinh doanh, Marketing & Hệ thống.',
    pricing_monthly: 'Thanh Toán Theo Tháng',
    pricing_annual: 'Thanh Toán Theo Năm',
    pricing_save_badge: 'Tiết kiệm 20%',
    pricing_popular: '✦ Gói Được Chọn Nhiều Nhất',

    // CTA Banner
    cta_badge: 'SẴN SÀNG QUẢN LÝ BÁN HÀNG TẬP TRUNG?',
    cta_title: 'Khởi Tạo Trung Tâm Điều Hành Shopdy Trong',
    cta_title_highlight: '60 Giây',
    cta_sub: 'Trải nghiệm trọn bộ tính năng Quản lý đơn hàng, Sản phẩm, KPI Nhân sự, Ads Manager, Email Marketing và Cổng thanh toán. Dùng thử miễn phí ngay.',
    cta_btn: 'Khởi Tạo Console Shopdy',

    // Footer
    footer_desc: 'Shopdy là Hệ điều hành & Nền tảng quản lý bán hàng trực tuyến All-in-One giúp bạn quản lý các Cửa hàng online, Đơn hàng, Sản phẩm, Doanh thu Team, Chiến dịch Marketing và Cổng thanh toán.',
    footer_status: 'Hệ thống Shopdy Engine 3.0: 99.99% Operational SLA',
    footer_col_1: 'Quản Lý Kinh Doanh',
    footer_col_2: 'Marketing & Hệ Thống',
    footer_col_3: 'Văn Phòng Toàn Cầu',
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('EN');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'VI' : 'EN'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
