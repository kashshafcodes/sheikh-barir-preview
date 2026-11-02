// Preview for Sheikh Barir Homemade food's & cake's (facebook.com/profile.php?id=61589530994727)
// Prices are SAMPLE values until the seller confirms real ones.

export const store = {
  name: "শেখ বাড়ির হোমমেড",
  nameLatin: "Sheikh Barir Homemade Food's & Cake's",
  tagline: "উত্তরার ঘরোয়া রান্নাঘর থেকে হাতে বানানো কেক, পিঠা আর ফ্রোজেন খাবার।",
  about:
    "জন্মদিন, নতুন চাকরি, যেকোনো উদযাপনের জন্য আপনার পছন্দের ডিজাইন আর নাম লিখে কাস্টম কেক বানিয়ে দিই। ঢাকার মধ্যে হোম ডেলিভারি।",

  previewNote: "এটি একটি ডেমো। দামগুলো নমুনা — আপনার আসল দাম বসিয়ে দেওয়া হবে।",

  whatsapp: "8801998852970",
  messengerUsername: "61589530994727",
  facebookUrl: "https://www.facebook.com/profile.php?id=61589530994727",
  phoneDisplay: "০১৯৯৮-৮৫২৯৭০",
  address: "উত্তরা, ঢাকা",
  hours: "অর্ডার নেওয়া হয় প্রতিদিন",

  delivery: [
    { id: "uttara", label: "উত্তরার ভেতরে", fee: 60, time: "অর্ডারের দিন" },
    { id: "dhaka", label: "ঢাকার অন্য এলাকায়", fee: 120, time: "১ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ"],

  lang: "bn",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://wa.me/8801700000000",

  categories: [
    { id: "birthday", label: "জন্মদিনের কেক" },
    { id: "theme", label: "থিম কেক" },
    { id: "celebration", label: "উদযাপনের কেক" },
  ],

  products: [
    {
      id: "c1",
      name: "রিবন ভ্যানিলা কেক (১ পাউন্ড)",
      category: "birthday",
      price: 750,
      image: "photos/c1.jpg",
      description: "সাদা ক্রিমের উপর লাল রিবন আর হার্ট। কেকের উপর যেকোনো নাম লিখে দেওয়া হয়।",
      tag: "জনপ্রিয়",
    },
    {
      id: "c2",
      name: "লাল রিবন বার্থডে কেক (১ পাউন্ড)",
      category: "birthday",
      price: 800,
      image: "photos/c2.jpg",
      description: "ক্রিম বর্ডার, লাল রিবন সাজ আর নাম লেখা। ছোট পারিবারিক জন্মদিনের জন্য।",
    },
    {
      id: "c3",
      name: "গোলাপি গোলাপ বার্থডে কেক (২ পাউন্ড)",
      category: "birthday",
      price: 1450,
      image: "photos/c3.jpg",
      description: "পুরো কেক জুড়ে ক্রিমের গোলাপি গোলাপ। নাম আর শুভেচ্ছা লিখে দেওয়া হয়।",
    },
    {
      id: "c4",
      name: "পুতুল থিম কেক (২ পাউন্ড)",
      category: "theme",
      price: 2200,
      image: "photos/c4.jpg",
      description: "মেয়েদের জন্মদিনের জন্য গোলাপি পুতুল থিম, ফুল আর প্রজাপতি দিয়ে সাজানো।",
      tag: "নতুন",
    },
    {
      id: "c5",
      name: "নতুন চাকরির অভিনন্দন কেক (১ পাউন্ড)",
      category: "celebration",
      price: 850,
      image: "photos/c5.jpg",
      description: "নীল গোলাপ আর ‘Congratulation’ লেখা। প্রমোশন, নতুন চাকরি বা পাসের খুশিতে।",
    },
  ],
};
