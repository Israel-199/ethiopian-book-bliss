import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";

export type BookKind = "paid" | "free" | "audio";

export type Book = {
  id: string;
  title: string;
  category: string;
  kind: BookKind;
  price?: number;
  cover: string;
  summary: string;
  preview: string;
  fullContent: string[];
};

export const books: Book[] = [
  {
    id: "yekidusan-tarik",
    title: "የቅዱሳን ታሪክ",
    category: "መንፈሳዊ ትምህርት",
    kind: "paid",
    price: 150,
    cover: book1,
    summary: "የቅዱሳን አባቶችና እናቶች ሕይወት፣ ተጋድሎና አስተምህሮ በዝርዝር የቀረበበት መጽሐፍ።",
    preview:
      "የቅዱሳን ሕይወት ለእኛ መስተዋት ነው። በተጋድሏቸው፣ በትዕግሥታቸውና በፍቅራቸው የእግዚአብሔርን ቸርነት እናያለን።",
    fullContent: [
      "ምዕራፍ አንድ — የቅዱሳን ሕይወት መግቢያ። ቅዱሳን ማለት በእግዚአብሔር ጸጋ ተለይተው የተቀደሱ ሰዎች ናቸው።",
      "ምዕራፍ ሁለት — ተጋድሎና ጸሎት። የቅዱሳን ዋነኛ መሣሪያቸው ጸሎት፣ ጾምና ትሕትና ነበር።",
      "ምዕራፍ ሦስት — ምስክርነት። ብዙዎቹ ሕይወታቸውን እስከ ሞት ድረስ ለእምነታቸው ሰጥተዋል።",
    ],
  },
  {
    id: "yetselot-memriya",
    title: "የጸሎት መመሪያ",
    category: "መሠረታዊ ትምህርት",
    kind: "free",
    cover: book2,
    summary: "ለጀማሪዎች የተዘጋጀ የዕለታዊ ጸሎት መመሪያና ሥርዓት።",
    preview: "ጸሎት ከእግዚአብሔር ጋር የምንነጋገርበት መንገድ ነው። በጠዋትና በማታ የምንጸልየው ጸሎት ልባችንን ያድሳል።",
    fullContent: [
      "ክፍል አንድ — የጠዋት ጸሎት ሥርዓት።",
      "ክፍል ሁለት — የማታ ጸሎትና የምስጋና ጊዜ።",
      "ክፍል ሦስት — በችግር ጊዜ የሚጸለዩ ጸሎቶች።",
    ],
  },
  {
    id: "yeimnet-guzo",
    title: "የእምነት ጉዞ",
    category: "ትረካ እና ትምህርት",
    kind: "audio",
    price: 120,
    cover: book3,
    summary: "በድምፅ የተዘጋጀ የእምነት ሕይወት ትምህርት፤ በአጠቃላይ 12 ክፍሎች።",
    preview: "የእምነት ጉዞ የሚጀምረው በአንዲት ትንሽ እርምጃ ነው። ይህ ተከታታይ ትምህርት ያንን እርምጃ ያሳያል።",
    fullContent: [
      "ክፍል 1 — እምነት ምንድን ነው? (ድምፅ 24 ደቂቃ)",
      "ክፍል 2 — በፈተና ጊዜ መጽናት። (ድምፅ 31 ደቂቃ)",
      "ክፍል 3 — የተስፋ ቃል። (ድምፅ 19 ደቂቃ)",
    ],
  },
  {
    id: "mistire-selassie",
    title: "ምስጢረ ሥላሴ",
    category: "ጥልቅ ትምህርት",
    kind: "paid",
    price: 200,
    cover: book4,
    summary: "ስለ ሥላሴ ምስጢር በሊቃውንት አስተምህሮ መሠረት የተብራራ ጥልቅ መጽሐፍ።",
    preview: "ሥላሴ በስም ሦስት፣ በባሕርይ አንድ ናቸው። ይህ ምስጢር በእምነት የሚያዝ ነው።",
    fullContent: [
      "ምዕራፍ አንድ — የሥላሴ አንድነትና ሦስትነት።",
      "ምዕራፍ ሁለት — በመጽሐፍ ቅዱስ ውስጥ ያሉ ማስረጃዎች።",
      "ምዕራፍ ሦስት — የሊቃውንት ትርጓሜ።",
    ],
  },
];

export const audioTeachings = [
  { id: "a1", title: "የጾም ትርጉሙ", duration: "42 ደቂቃ", teacher: "መጋቢ ሐዲስ ሙሉጌታ" },
  { id: "a2", title: "ንሰሃ መግባት", duration: "35 ደቂቃ", teacher: "መጋቢ ቴዎድሮስ" },
  { id: "a3", title: "ስለ ንስሐ ሕይወት", duration: "28 ደቂቃ", teacher: "መጋቢ አሸናፊ" },
  { id: "a4", title: "ስለ ቅድስና", duration: "51 ደቂቃ", teacher: "መጋቢ ገብረ ሥላሴ" },
];

export const courses = [
  {
    id: "c1",
    title: "መሠረታዊ የክርስትና ትምህርት",
    lessons: 12,
    level: "ጀማሪ",
    description: "ስለ እምነት፣ ጸሎት፣ ጾምና ምሥጢራት መሠረታዊ ትምህርት።",
  },
  {
    id: "c2",
    title: "የግዕዝ ቋንቋ መግቢያ",
    lessons: 18,
    level: "መካከለኛ",
    description: "የግዕዝ ፊደላት፣ ሰዋስውና የመጻሕፍት ንባብ።",
  },
  {
    id: "c3",
    title: "የመጽሐፍ ቅዱስ ጥናት",
    lessons: 24,
    level: "ላቀ",
    description: "ብሉይና ሐዲስ ኪዳንን በቅደም ተከተል የማጥናት ሥልጠና።",
  },
];

export const blogPosts = [
  {
    slug: "yetsom-menfesawi-tirgum",
    title: "የጾም መንፈሳዊ ትርጉም",
    date: "ጳጉሜን 3, 2016",
    excerpt: "ጾም ለነፍስ ጤናና ለመንፈሳዊ ጥንካሬ ያለውን ፋይዳ በጥልቀት የሚቃኝ ጽሑፍ።",
    body: [
      "ጾም ማለት ከምግብ መከልከል ብቻ አይደለም። ልብን ከክፉ ሐሳብ፣ አንደበትን ከክፉ ንግግር መጠበቅም ጭምር ነው።",
      "አባቶቻችን ጾምን ከጸሎትና ከምጽዋት ጋር አገናኝተው ያስተምራሉ። ሦስቱ ተለያይተው ሙሉ አይሆኑም።",
      "በጾም ወቅት የምናደርገው ተጋድሎ ልባችንን ለእግዚአብሔር ቃል ክፍት ያደርገዋል።",
    ],
  },
  {
    slug: "yegeez-quanqua",
    title: "የግዕዝ ቋንቋ አስፈላጊነት",
    date: "ነሐሴ 21, 2016",
    excerpt: "ለጥንታዊ መጻሕፍትና ለቤተ ክርስቲያን አገልግሎት የግዕዝን ቋንቋ ማወቅ ያለው ጠቀሜታ።",
    body: [
      "ግዕዝ የብዙ ጥንታዊ መጻሕፍታችን ቋንቋ ነው። ያለ እርሱ የመጻሕፍቱን ጥልቀት ማወቅ ከባድ ነው።",
      "ዛሬ ብዙ ወጣቶች ግዕዝን መማር ጀምረዋል፤ ይህም ትልቅ ተስፋ ነው።",
    ],
  },
  {
    slug: "yetselot-hiwot",
    title: "የጸሎት ሕይወት ልምምድ",
    date: "ሐምሌ 9, 2016",
    excerpt: "በየቀኑ የምናደርጋቸው ጸሎቶች በሕይወታችን ላይ የሚያመጡት ለውጥ።",
    body: [
      "ጸሎት ልምምድ ነው። በጥቂቱ ተጀምሮ በጊዜ ሂደት የሚያድግ መንፈሳዊ ልማድ።",
      "የተወሰነ ሰዓት መርጠው በየቀኑ መጸለይ ይጀምሩ።",
    ],
  },
];

export const wordOfTheDay = {
  label: "የዕለቱ ቃል / Word of the Day",
  title: "የሕይወት እንጀራና መንፈሳዊ ጥንካሬ",
  body: "በየቀኑ የሚታደስ መንፈሳዊ ስንቅ ለነፍስዎ። ዛሬን በተስፋና በብርታት ይጀምሩ።",
  quote: "ቃልህ ለእግሬ መብራት፣ ለመንገዴም ብርሃን ነው።",
};

export const paymentInfo = {
  banks: "1000123456789 / 22334455",
  holder: "ስሜነህ አድማሱ",
  telegram: "https://t.me/berhanbooks",
  telegramHandle: "@rebibooks",
};
