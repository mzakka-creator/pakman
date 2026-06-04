import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { l as logoAsset } from "./router-BFZcBGJ-.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-full hover:bg-foreground/90 hover:-translate-y-px",
        outline: "border border-foreground/20 bg-transparent text-foreground rounded-full hover:bg-foreground hover:text-background hover:border-foreground",
        ghost: "text-foreground rounded-full hover:bg-foreground/5",
        link: "text-foreground underline-offset-[6px] hover:underline decoration-foreground/30 hover:decoration-foreground rounded-none px-0",
        secondary: "bg-secondary text-foreground rounded-full hover:bg-warm-gray border border-hairline",
        destructive: "bg-destructive text-destructive-foreground rounded-full hover:opacity-90"
      },
      size: {
        default: "h-11 px-6 text-sm tracking-tight",
        sm: "h-9 px-4 text-xs tracking-wide",
        lg: "h-14 px-8 text-[15px] tracking-tight",
        xl: "h-16 px-10 text-base tracking-tight",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
function Logo({ className = "h-8 w-auto", style }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "Pakman Packaging Solutions", className, style });
}
function Intro({ onDone, tagline }) {
  const [stage, setStage] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1500);
    const t3 = setTimeout(() => setStage(3), 2500);
    const t4 = setTimeout(() => onDone(), 3100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-canvas transition-opacity duration-700",
      style: { opacity: stage === 3 ? 0 : 1, pointerEvents: stage === 3 ? "none" : "auto" },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative flex items-center justify-center transition-all duration-700 ease-out",
            style: { opacity: stage >= 0 ? 1 : 0 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoAsset.url,
                alt: "",
                className: "object-contain transition-all duration-700 ease-out invert brightness-0 contrast-200",
                style: {
                  width: stage === 0 ? "72px" : "260px",
                  height: stage === 0 ? "72px" : "auto",
                  filter: "invert(1) brightness(2)",
                  objectFit: "contain",
                  objectPosition: stage === 0 ? "left center" : "center",
                  clipPath: stage === 0 ? "inset(0 70% 0 0)" : "inset(0 0 0 0)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-[10px] tracking-[0.4em] uppercase text-warm-gray transition-all duration-700",
            style: { opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? "translateY(0)" : "translateY(8px)" },
            children: tagline
          }
        )
      ] })
    }
  );
}
const content = {
  en: {
    dir: "ltr",
    lang: "en",
    htmlLang: "en",
    introTagline: "Packaging Solutions",
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      solutions: "Solutions",
      work: "Our Work",
      clients: "Clients",
      contact: "Contact",
      cta: "Request a Quote",
      switchLang: "العربية",
      switchHref: "/ar"
    },
    hero: {
      eyebrow: "Pakman Packaging Solutions",
      title1: "Premium Packaging",
      title2: "for Restaurants and Cafés",
      sub: "Complete custom packaging solutions for food businesses that care about presentation, quality and customer experience.",
      body: "From coffee cups and paper bags to burger boxes, food containers, napkins, labels and takeaway packaging, Pakman helps restaurants and cafés serve their products with a professional brand presence.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "View Products",
      trust: "Founded in Jeddah, Saudi Arabia in 2024"
    },
    clients: {
      eyebrow: "Clients",
      title: "Trusted by Leading Food Brands",
      text: "We proudly provide premium packaging solutions for restaurants, cafés and food brands serving thousands of customers every day."
    },
    about: {
      eyebrow: "About",
      title: "About Pakman",
      body1: "Pakman Packaging Solutions is a Saudi company founded in Jeddah, Saudi Arabia in 2024. We specialize in complete packaging solutions for restaurants, cafés, bakeries, catering companies and food brands.",
      body2: "Our mission is to help food businesses present their products professionally through high quality packaging that protects the product, strengthens the brand and improves the customer experience.",
      title2: "An Ecosystem Built Around Food Businesses",
      body3: "From coffee cups and paper bags to custom printed boxes, labels and takeaway packaging, Pakman provides a complete ecosystem designed around the daily needs of food businesses.",
      body4: "We work alongside our clients from idea to delivery, helping them choose the right materials, sizes, finishing and branding applications so every package they hand a customer feels like an extension of their brand."
    },
    products: {
      eyebrow: "Products",
      title: "Complete Restaurant Packaging Solutions",
      list: [
        "Coffee Cups",
        "Cold Drink Cups",
        "Clear Plastic Cups",
        "Cup Lids",
        "Cup Sleeves",
        "Paper Bags",
        "Burger Boxes",
        "Sandwich Boxes",
        "Food Containers",
        "Salad Bowls",
        "Soup Bowls",
        "Plates",
        "Pizza Boxes",
        "Bakery Boxes",
        "Napkins",
        "Cutlery",
        "Labels",
        "Stickers",
        "Wrapping Paper",
        "Takeaway Bags",
        "Delivery Packaging",
        "Tissue Boxes",
        "Custom Printed Packaging"
      ]
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Built for Every Food Business",
      cards: [
        { t: "Restaurants", d: "Packaging for dine in, takeaway and delivery operations." },
        { t: "Cafés", d: "Cups, sleeves, bags, labels and branded packaging for coffee concepts." },
        { t: "Bakeries", d: "Boxes, bags, stickers and wrapping paper for baked goods and desserts." },
        { t: "Catering Companies", d: "Reliable packaging for events, meal service and professional food presentation." },
        { t: "Cloud Kitchens", d: "Practical and branded packaging for delivery focused food businesses." },
        { t: "Food Brands", d: "Custom packaging that helps food products look market ready." }
      ]
    },
    work: {
      eyebrow: "Our Work",
      title: "Packaging That Represents the Brand",
      text: "A visual gallery of packaging applications created for food businesses, including cups, paper bags, food boxes, labels, napkins and takeaway solutions."
    },
    why: {
      eyebrow: "Why Pakman",
      title: "Why Food Businesses Choose Pakman",
      points: [
        "Complete restaurant packaging supply",
        "Custom branding and printing",
        "Food safe material options",
        "Flexible quantities",
        "Clean finishing",
        "Fast communication",
        "Reliable delivery",
        "Support from idea to final product"
      ]
    },
    quote: {
      eyebrow: "Request a Quote",
      title: "Request a Packaging Quote",
      text: "Tell us about your restaurant, café or food brand and our team will help you choose the right packaging solution.",
      fields: {
        name: "Full Name",
        company: "Company Name",
        type: "Business Type",
        phone: "Phone Number",
        email: "Email Address",
        products: "Packaging Products Needed",
        qty: "Estimated Quantity",
        message: "Message"
      },
      submit: "Send Request",
      note: "Our team replies within one business day."
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Pakman",
      location: "Jeddah, Saudi Arabia",
      phoneLabel: "Phone",
      phone: "+966 53 158 5759",
      emailLabel: "Email",
      email: "Info@pakman-mena.com",
      whatsapp: "WhatsApp"
    },
    locationSection: {
      title: "Our Headquarters",
      sub: "Visit Pakman in Jeddah, the heart of Saudi Arabia's hospitality and food scene.",
      company: "Pakman Headquarters",
      city: "Jeddah",
      district: "Al Rawdah District",
      area: "Nahdat Al Nasr",
      cta: "View on Google Maps",
      mapsUrl: "https://maps.app.goo.gl/KcoPSwf5fX6mQD7PA?g_st=ic"
    },
    footer: {
      title: "Pakman Packaging Solutions",
      text: "A Saudi packaging company providing complete custom packaging solutions for restaurants, cafés, bakeries, catering companies and food brands.",
      rights: "© 2026 Pakman Packaging Solutions. All rights reserved.",
      sectionsLabel: "Sections",
      contactLabel: "Contact"
    }
  },
  ar: {
    dir: "rtl",
    lang: "ar",
    htmlLang: "ar",
    introTagline: "حلول التغليف",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      solutions: "الحلول",
      work: "أعمالنا",
      clients: "العملاء",
      contact: "تواصل",
      cta: "طلب عرض سعر",
      switchLang: "English",
      switchHref: "/"
    },
    hero: {
      eyebrow: "باكمان لحلول التغليف",
      title1: "تغليف احترافي",
      title2: "للمطاعم والمقاهي",
      sub: "حلول تغليف مخصصة ومتكاملة للعلامات الغذائية التي تهتم بطريقة التقديم وجودة المنتج وتجربة العميل.",
      body: "من أكواب القهوة والأكياس الورقية إلى علب البرجر وعلب الطعام والمناديل والملصقات وتغليف التيك أواي، تساعد باكمان المطاعم والمقاهي على تقديم منتجاتها بحضور احترافي يعكس قيمة العلامة.",
      ctaPrimary: "طلب عرض سعر",
      ctaSecondary: "عرض المنتجات",
      trust: "شركة سعودية تأسست في جدة عام 2024"
    },
    clients: {
      eyebrow: "العملاء",
      title: "نفخر بخدمة علامات غذائية رائدة",
      text: "نفخر بتقديم حلول تغليف احترافية للمطاعم والمقاهي والعلامات الغذائية التي تخدم آلاف العملاء يومياً."
    },
    about: {
      eyebrow: "من نحن",
      title: "من نحن",
      body1: "باكمان لحلول التغليف شركة سعودية تأسست في جدة عام 2024، متخصصة في تقديم حلول تغليف متكاملة للمطاعم والمقاهي والمخابز وشركات الإعاشة والعلامات الغذائية.",
      body2: "نؤمن بأن التغليف ليس مجرد وسيلة لحفظ المنتج، بل جزء أساسي من تجربة العميل وهوية العلامة التجارية. لذلك نوفر مجموعة متكاملة من حلول التغليف المصممة لتساعد العلامات الغذائية على الظهور بشكل احترافي وتقديم منتجاتها بأفضل صورة ممكنة.",
      title2: "منظومة متكاملة لقطاع الأغذية والمشروبات",
      body3: "من أكواب القهوة والأكياس الورقية إلى العلب المطبوعة والملصقات وحلول التيك أواي والتوصيل، تقدم باكمان منظومة متكاملة تلبي احتياجات قطاع الأغذية والمشروبات.",
      body4: "نعمل مع عملائنا من الفكرة حتى التسليم، ونساعدهم في اختيار الخامات والمقاسات والتشطيبات وتطبيقات الهوية، ليصبح كل تغليف يخرج باسمهم امتدادًا حقيقيًا لعلامتهم التجارية."
    },
    products: {
      eyebrow: "المنتجات",
      title: "حلول متكاملة لتغليف المطاعم",
      list: [
        "أكواب القهوة",
        "أكواب المشروبات الباردة",
        "أكواب بلاستيك شفافة",
        "أغطية الأكواب",
        "أغلفة الأكواب",
        "أكياس ورقية",
        "علب برجر",
        "علب ساندويتش",
        "علب طعام",
        "علب سلطة",
        "علب شوربة",
        "أطباق",
        "علب بيتزا",
        "علب مخابز",
        "مناديل",
        "أدوات طعام",
        "ملصقات",
        "استكرات",
        "ورق تغليف",
        "أكياس تيك أواي",
        "تغليف التوصيل",
        "علب مناديل",
        "تغليف مطبوع مخصص"
      ]
    },
    solutions: {
      eyebrow: "الحلول",
      title: "مصمم لكل علامة غذائية",
      cards: [
        { t: "المطاعم", d: "تغليف مناسب للطلبات الداخلية والتيك أواي والتوصيل." },
        { t: "المقاهي", d: "أكواب وأغلفة وأكياس وملصقات وتغليف يحمل هوية المقهى." },
        { t: "المخابز", d: "علب وأكياس واستكرات وورق تغليف مخصص للمخبوزات والحلويات." },
        { t: "شركات الإعاشة", d: "تغليف موثوق للمناسبات والوجبات والتقديم الاحترافي." },
        { t: "المطابخ السحابية", d: "تغليف عملي واحترافي للعلامات التي تعتمد على التوصيل." },
        { t: "العلامات الغذائية", d: "تغليف مخصص يساعد المنتج على الظهور بشكل جاهز للسوق." }
      ]
    },
    work: {
      eyebrow: "أعمالنا",
      title: "تغليف يعكس هوية العلامة",
      text: "معرض بصري لتطبيقات التغليف التي تخدم العلامات الغذائية، ويشمل الأكواب والأكياس الورقية وعلب الطعام والملصقات والمناديل وحلول التيك أواي."
    },
    why: {
      eyebrow: "لماذا باكمان",
      title: "لماذا تختار العلامات الغذائية باكمان",
      points: [
        "توريد متكامل لتغليف المطاعم",
        "تخصيص وطباعة حسب الهوية",
        "خيارات خامات آمنة للأغذية",
        "كميات مرنة",
        "تشطيب نظيف",
        "تواصل سريع",
        "تسليم موثوق",
        "دعم من الفكرة حتى المنتج النهائي"
      ]
    },
    quote: {
      eyebrow: "طلب عرض سعر",
      title: "اطلب عرض سعر للتغليف",
      text: "حدثنا عن مطعمك أو مقهاك أو علامتك الغذائية وسيساعدك فريقنا في اختيار حل التغليف المناسب.",
      fields: {
        name: "الاسم الكامل",
        company: "اسم الشركة",
        type: "نوع النشاط",
        phone: "رقم الجوال",
        email: "البريد الإلكتروني",
        products: "منتجات التغليف المطلوبة",
        qty: "الكمية المتوقعة",
        message: "الرسالة"
      },
      submit: "إرسال الطلب",
      note: "يرد فريقنا خلال يوم عمل واحد."
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصل مع باكمان",
      location: "جدة، المملكة العربية السعودية",
      phoneLabel: "الجوال",
      phone: "+966 53 158 5759",
      emailLabel: "البريد",
      email: "Info@pakman-mena.com",
      whatsapp: "واتساب"
    },
    locationSection: {
      title: "مقرنا الرئيسي",
      sub: "زورونا في جدة، قلب قطاع الضيافة والأغذية في المملكة العربية السعودية.",
      company: "المقر الرئيسي لباكمان",
      city: "جدة",
      district: "حي الروضة",
      area: "نهضة النصر",
      cta: "عرض على خرائط جوجل",
      mapsUrl: "https://maps.app.goo.gl/KcoPSwf5fX6mQD7PA?g_st=ic"
    },
    footer: {
      title: "باكمان لحلول التغليف",
      text: "شركة سعودية تقدم حلول تغليف مخصصة ومتكاملة للمطاعم والمقاهي والمخابز وشركات الإعاشة والعلامات الغذائية.",
      rights: "© 2026 باكمان لحلول التغليف. جميع الحقوق محفوظة.",
      sectionsLabel: "أقسام الموقع",
      contactLabel: "للتواصل"
    }
  }
};
const heroImg = "/assets/hero-arrangement-B-0-pVFj.jpg";
const aboutImg = "/assets/about-arrangement-B3sEyafB.jpg";
const saudiMap = "/assets/saudi-map-BHKr72k7.jpg";
const coffeeCups = "/assets/coffee-cups-BC4ltGmm.jpg";
const coldCups = "/assets/cold-cups-DYmS2ghU.jpg";
const clearCups = "/assets/clear-cups-AErFNwv7.jpg";
const cupLids = "/assets/cup-lids-Dcbw7ggQ.jpg";
const cupSleeves = "/assets/cup-sleeves-D9NSPdlZ.jpg";
const paperBags = "/assets/paper-bags-DhByPaX-.jpg";
const burgerBoxes = "/assets/burger-boxes-DUd1xwRt.jpg";
const sandwichBoxes = "/assets/sandwich-boxes-B76jPv6C.jpg";
const foodContainers = "/assets/food-containers-De9WNWdL.jpg";
const saladBowls = "/assets/salad-bowls-CQ2atVXj.jpg";
const soupBowls = "/assets/soup-bowls-DXDuIP77.jpg";
const plates = "/assets/plates-B5nCAKEH.jpg";
const pizzaBoxes = "/assets/pizza-boxes-DmU5znY5.jpg";
const bakeryBoxes = "/assets/bakery-boxes-VvTwY2RV.jpg";
const napkins = "/assets/napkins-B095jbQJ.jpg";
const cutlery = "/assets/cutlery-UD_hkPMR.jpg";
const labels = "/assets/labels-DrK4yGia.jpg";
const stickers = "/assets/stickers--TN2h5Lt.jpg";
const wrappingPaper = "/assets/wrapping-paper-CTRvnC57.jpg";
const takeaway = "/assets/takeaway-Cm4piVb9.jpg";
const delivery = "/assets/delivery-BXiA5Bqu.jpg";
const tissueBoxes = "/assets/tissue-boxes-BMIeZHFO.jpg";
const customPrinted = "/assets/custom-printed-Cve93Fr0.jpg";
const categoryImages = [
  coffeeCups,
  coldCups,
  clearCups,
  cupLids,
  cupSleeves,
  paperBags,
  burgerBoxes,
  sandwichBoxes,
  foodContainers,
  saladBowls,
  soupBowls,
  plates,
  pizzaBoxes,
  bakeryBoxes,
  napkins,
  cutlery,
  labels,
  stickers,
  wrappingPaper,
  takeaway,
  delivery,
  tissueBoxes,
  customPrinted
];
const url$6 = "/__l5e/assets-v1/c3204949-db1b-4219-8937-d57e0f66aff7/subbie.png";
const subbie = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/a3a18634-deb4-4fc9-a025-5076a9bea461/btc.jpg";
const btc = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/8d218d21-f00c-4ba7-80d9-49c0c9bd78e4/tasting-spoon.jpg";
const tastingSpoon = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/402e7375-85b8-4e25-a39d-1235e79e8e68/evolve.jpg";
const evolve = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/4f35b9e4-739b-4328-8a90-73ebd340b646/prepd.jpg";
const prepd = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/4984d1f3-76d1-46f3-b577-71862bb2839e/fornia.jpg";
const fornia = {
  url: url$1
};
const url = "/__l5e/assets-v1/d2ea0994-02d5-4cf1-867d-53e73c4231e4/circle-section.png";
const circleSection = {
  url
};
const clientLogos = [
  { name: "Subbie", url: subbie.url, transparent: true },
  { name: "Basamh Trading Company", url: btc.url, transparent: false },
  { name: "Tasting Spoon Catering", url: tastingSpoon.url, transparent: false },
  { name: "Evolve", url: evolve.url, transparent: false },
  { name: "Prepd", url: prepd.url, transparent: false },
  { name: "Fornia", url: fornia.url, transparent: false },
  { name: "Circle Section", url: circleSection.url, transparent: true }
];
const workImages = categoryImages;
function PakmanSite({ lang }) {
  const c = content[lang];
  const isRTL = c.dir === "rtl";
  const [showIntro, setShowIntro] = reactExports.useState(true);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "pakman_intro_seen";
    if (sessionStorage.getItem(key)) {
      setShowIntro(false);
    } else {
      sessionStorage.setItem(key, "1");
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang, showIntro]);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const prevDir = html.getAttribute("dir");
    const prevLang = html.getAttribute("lang");
    html.setAttribute("dir", c.dir);
    html.setAttribute("lang", c.htmlLang);
    return () => {
      if (prevDir) html.setAttribute("dir", prevDir);
      else html.removeAttribute("dir");
      if (prevLang) html.setAttribute("lang", prevLang);
      else html.removeAttribute("lang");
    };
  }, [c.dir, c.htmlLang]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal text-canvas", dir: c.dir, children: [
    showIntro && /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, { tagline: c.introTagline, onDone: () => setShowIntro(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: `fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? "backdrop-blur-xl bg-charcoal/85 border-b border-white/8 shadow-[0_4px_24px_-12px_oklch(0_0_0/0.5)]" : "bg-transparent border-b border-transparent"} text-canvas`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `container-x flex items-center justify-between gap-6 transition-all duration-500 ${scrolled ? "h-20 md:h-20" : "h-24 md:h-28"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: lang === "en" ? "/" : "/ar", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Logo,
                  {
                    className: `w-auto transition-all duration-500 ${scrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`,
                    style: { filter: "invert(1) brightness(2.2)" }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-10 text-sm text-canvas/85", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#about", children: c.nav.about }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#products", children: c.nav.products }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#solutions", children: c.nav.solutions }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#work", children: c.nav.work }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#clients", children: c.nav.clients }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-champagne transition-colors", href: "#contact", children: c.nav.contact })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: c.nav.switchHref,
                      className: "text-xs tracking-[0.18em] uppercase text-canvas/80 hover:text-champagne transition-colors",
                      children: c.nav.switchLang
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", asChild: true, className: "hidden sm:inline-flex bg-canvas text-charcoal hover:bg-champagne", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: c.nav.cta }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Menu",
                      onClick: () => setMobileOpen((v) => !v),
                      className: "lg:hidden inline-flex items-center justify-center size-11 rounded-full border border-white/30 text-canvas hover:bg-white/10 transition-colors",
                      children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-charcoal/95 backdrop-blur-xl border-t border-white/10 ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-col gap-1 text-base", children: [
                [
                  ["#about", c.nav.about],
                  ["#products", c.nav.products],
                  ["#solutions", c.nav.solutions],
                  ["#work", c.nav.work],
                  ["#clients", c.nav.clients],
                  ["#contact", c.nav.contact]
                ].map(([href, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    onClick: () => setMobileOpen(false),
                    className: "py-3 border-b border-white/10 text-canvas hover:text-champagne transition-colors",
                    children: label
                  },
                  href
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, className: "mt-6 bg-canvas text-charcoal hover:bg-champagne", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", onClick: () => setMobileOpen(false), children: c.nav.cta }) })
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden dark-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative pt-36 md:pt-44 pb-24 md:pb-32 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display-1 text-canvas", children: [
            c.hero.title1,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-canvas/55", children: c.hero.title2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body-lg mt-8 max-w-xl text-canvas/75", children: c.hero.sub }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, className: "bg-canvas text-charcoal hover:bg-champagne hover:text-charcoal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: c.hero.ctaPrimary }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, className: "border-canvas/30 text-canvas hover:bg-canvas hover:text-charcoal hover:border-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#products", children: c.hero.ctaSecondary }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_oklch(0_0_0/0.7)] border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: "",
              width: 1920,
              height: 1320,
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0",
              style: { background: "linear-gradient(120deg, oklch(0 0 0 / 0.25), transparent 40%, transparent 60%, oklch(0 0 0 / 0.25))" }
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-rule absolute bottom-0 inset-x-0 opacity-50" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "clients", className: "dark-section border-y border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-end mb-12 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.clients.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-5 body-lg text-canvas/70", children: c.clients.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4", children: clientLogos.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "reveal aspect-square flex items-center justify-center rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:border-champagne/40 group overflow-hidden relative",
          style: {
            transitionDelay: `${i * 80}ms`,
            background: "linear-gradient(155deg, oklch(from var(--charcoal) calc(l + 0.04) c h / 0.6), oklch(from var(--charcoal) l c h / 0.3))",
            boxShadow: "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06)"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.boxShadow = "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06), 0 20px 60px -20px oklch(from var(--champagne) l c h / 0.35), 0 0 0 1px oklch(from var(--champagne) l c h / 0.2)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.boxShadow = "inset 0 1px 0 0 oklch(from var(--canvas) l c h / 0.06)";
          },
          title: l.name,
          children: l.transparent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: l.url,
              alt: l.name,
              loading: "lazy",
              className: "max-h-[55%] max-w-[72%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[78%] aspect-square rounded-xl bg-canvas flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.04]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: l.url,
              alt: l.name,
              loading: "lazy",
              className: "max-h-[78%] max-w-[82%] object-contain"
            }
          ) })
        },
        l.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-y dark-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.about.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body-lg text-canvas/75", children: c.about.body1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body-lg text-canvas/75", children: c.about.body2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 reveal relative overflow-hidden rounded-2xl border border-white/5", style: { minHeight: "520px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.05]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 reveal dark-card p-8 md:p-10 flex flex-col gap-6 justify-between", style: { minHeight: "520px" }, children: [
          { t: lang === "en" ? "Founded in Jeddah, 2024" : "تأسست في جدة عام 2024", d: lang === "en" ? "A Saudi company built for the local hospitality scene." : "شركة سعودية بنيت لخدمة قطاع الضيافة المحلي." },
          { t: lang === "en" ? "Specialized in Food Packaging" : "متخصصون في تغليف الأغذية", d: lang === "en" ? "Restaurants, cafés, bakeries, catering and food brands." : "للمطاعم والمقاهي والمخابز وشركات الإعاشة." },
          { t: lang === "en" ? "Premium Quality Materials" : "خامات بجودة عالية", d: lang === "en" ? "Food safe and finished to a luxury standard." : "آمنة للأغذية وبتشطيب فاخر." },
          { t: lang === "en" ? "Support Idea to Delivery" : "دعم من الفكرة إلى التسليم", d: lang === "en" ? "Design, prototyping, print and reliable supply." : "تصميم ونماذج وطباعة وتوريد موثوق." }
        ].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 size-8 rounded-full flex items-center justify-center text-[10px] font-display tracking-[0.18em]", style: { background: "oklch(from var(--champagne) l c h / 0.18)", color: "var(--champagne)" }, children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-canvas text-[15px] leading-tight", children: f.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[13px] leading-relaxed text-canvas/65", children: f.d })
          ] })
        ] }, f.t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "section-y dark-section relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-end reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 max-w-3xl text-canvas", children: c.products.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-canvas/30 text-canvas hover:bg-canvas hover:text-charcoal hover:border-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: c.nav.cta }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5", children: c.products.list.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "reveal group dark-card overflow-hidden",
          style: { transitionDelay: `${i % 12 * 40}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: categoryImages[i] ?? categoryImages[categoryImages.length - 1],
                  alt: name,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.10]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-30",
                  style: { background: "linear-gradient(180deg, transparent 40%, oklch(0 0 0 / 0.55))" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-4 md:px-4 md:py-5 flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[13px] md:text-sm leading-tight text-canvas/90 group-hover:text-champagne transition-colors", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-[0.2em] text-canvas/35 font-display", children: String(i + 1).padStart(2, "0") })
            ] })
          ]
        },
        name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "solutions", className: "section-y dark-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.solutions.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5", children: c.solutions.cards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal dark-card p-10 group", style: { transitionDelay: `${i * 60}ms` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs text-champagne tracking-[0.2em]", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-lg mt-6 text-canvas group-hover:text-champagne transition-colors", children: card.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-canvas/65 leading-relaxed", children: card.d })
      ] }, card.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "section-y dark-section border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-end reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.work.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-5 body-lg text-canvas/70", children: c.work.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid grid-cols-6 gap-3 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-4 relative aspect-[16/10] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[15], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[0], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[3], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[2], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-2 relative aspect-square overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[12], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[5], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-3 relative aspect-[4/3] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workImages[10], alt: "", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-charcoal text-canvas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.why.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6", children: c.why.points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/15 pt-5 flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-warm-gray text-sm", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: p })
      ] }, p)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "quote", className: "section-y dark-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.quote.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body-lg mt-6 text-canvas/70", children: c.quote.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "lg:col-span-7 reveal dark-card p-8 md:p-10 space-y-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-7", children: [
          ["name", c.quote.fields.name],
          ["company", c.quote.fields.company],
          ["type", c.quote.fields.type],
          ["phone", c.quote.fields.phone],
          ["email", c.quote.fields.email],
          ["qty", c.quote.fields.qty]
        ].map(([id, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-[10px] uppercase tracking-[0.22em] text-canvas/60", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id, className: "h-12 rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne placeholder:text-canvas/30", dir: c.dir })
        ] }, id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "products", className: "text-[10px] uppercase tracking-[0.22em] text-canvas/60", children: c.quote.fields.products }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "products", className: "h-12 rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne", dir: c.dir })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", className: "text-[10px] uppercase tracking-[0.22em] text-canvas/60", children: c.quote.fields.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", rows: 4, dir: c.dir, className: "rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-canvas focus-visible:ring-0 focus-visible:border-champagne resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-wrap items-center justify-between gap-4 pt-2 ${isRTL ? "flex-row-reverse" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-canvas/55", children: c.quote.note }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", type: "submit", className: "bg-canvas text-charcoal hover:bg-champagne", children: c.quote.submit })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "location", className: "dark-section border-t border-white/5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: saudiMap,
            alt: "",
            loading: "lazy",
            width: 1920,
            height: 1080,
            className: "w-full h-full object-cover opacity-70"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(90deg, var(--charcoal) 0%, oklch(from var(--charcoal) l c h / 0.85) 35%, oklch(from var(--charcoal) l c h / 0.35) 65%, transparent 100%)"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x section-y relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.locationSection.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "body-lg mt-6 text-canvas/75", children: c.locationSection.sub }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 dark-card p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-canvas", children: c.locationSection.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-1.5 text-canvas/80 font-display text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.locationSection.city }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.locationSection.district }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.locationSection.area })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: c.locationSection.mapsUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-8 inline-flex items-center gap-3 bg-canvas text-charcoal px-7 py-3.5 text-sm font-display tracking-wide hover:bg-champagne transition-colors",
              children: [
                c.locationSection.cta,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "dark-section border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x section-y grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-canvas", children: c.contact.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-champagne", children: lang === "en" ? "Location" : "الموقع" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-lg text-canvas", children: c.contact.location })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-champagne", children: c.contact.phoneLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${c.contact.phone.replace(/\s/g, "")}`, className: "mt-3 font-display text-lg block text-canvas hover:text-champagne transition-colors", dir: "ltr", children: c.contact.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-champagne", children: c.contact.emailLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${c.contact.email}`, className: "mt-3 font-display text-lg block text-canvas hover:text-champagne transition-colors", dir: "ltr", children: c.contact.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-champagne", children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${c.contact.phone.replace(/[^0-9]/g, "")}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-3 inline-flex items-center gap-2 font-display text-lg text-canvas hover:text-champagne transition-colors",
              children: c.contact.whatsapp
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-charcoal text-canvas", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 grid gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-16 md:h-20 w-auto", style: { filter: "invert(1) brightness(2.2)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-xl text-canvas max-w-md", children: c.footer.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-warm-gray max-w-md leading-relaxed", children: c.footer.text })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: [
          ["#about", c.nav.about],
          ["#products", c.nav.products],
          ["#solutions", c.nav.solutions],
          ["#work", c.nav.work],
          ["#clients", c.nav.clients]
        ].map(([href, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "text-warm-gray hover:text-canvas transition-colors", children: label }) }, href)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-warm-gray", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: c.contact.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dir: "ltr", children: c.contact.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dir: "ltr", children: c.contact.email })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-wrap justify-between gap-3 text-xs text-concrete", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.footer.rights }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.nav.switchHref, className: "hover:text-canvas transition-colors", children: c.nav.switchLang })
      ] }) })
    ] })
  ] });
}
export {
  PakmanSite as P
};
