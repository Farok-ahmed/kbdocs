const forumData = [
  {
    id: "forum-1",
    icon: "/img/home_support/rc1.png",
    title: "Announcements",
    description: "This forum is a special forum for general announcements.",
    topics: 10,
    posts: 105,
    freshness: "2 years, 2 months ago",
    author: "Eh Jewel",
    authorAvatar: "/img/home_support/cp5.jpg",
  },
  {
    id: "forum-2",
    icon: "/img/home_support/rc2.png",
    title: "Technology",
    description: "Latest technology news and updates from our community.",
    topics: 20,
    posts: 305,
    freshness: "2 years, 2 months ago",
    author: "Eh Jewel",
    authorAvatar: "/img/home_support/cp6.jpg",
  },
  {
    id: "forum-3",
    icon: "/img/home_support/rc8.png",
    title: "TV & Movies",
    description:
      "Use this forum to share your opinion about films and TV Shows.",
    topics: 30,
    posts: 156,
    freshness: "2 years, 2 months ago",
    author: "Kyle Jonson",
    authorAvatar: "/img/home_support/cp7.png",
  },
  {
    id: "forum-4",
    icon: "/img/home_support/rc3.png",
    title: "KbDoc Support",
    description:
      "Get support for KbDoc knowledge-base and documentation template.",
    topics: 99,
    posts: 405,
    freshness: "1 years, 2 months ago",
    author: "Giles Posture",
    authorAvatar: "/img/home_support/cp10.png",
  },
  {
    id: "forum-5",
    icon: "/img/home_support/rc13.png",
    title: "Marketplaces",
    description: "This forum is a special forum for marketplace support.",
    topics: 50,
    posts: 215,
    freshness: "1 years, 3 months ago",
    author: "Eh Jewel",
    authorAvatar: "/img/home_support/cp5.jpg",
  },
];

const topicsList = [
  {
    id: 1,
    forumId: "forum-1",
    authorAvatar: "/img/home_support/cp2.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Workspace/Org Administration",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm1.png",
    lastUpdated: "3 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["kbDoc", "richard", "bug"],
    badges: [],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 2,
    forumId: "forum-1",
    authorAvatar: "/img/home_support/cp1.png",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Course do not display properly",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm2.png",
    lastUpdated: "5 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["improvement", "kbDoc", "open", "druid"],
    badges: [{ text: "Docbuzz", color: "" }],
    isFeatured: true,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 3,
    forumId: "forum-2",
    authorAvatar: "/img/home_support/cp3.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "How to add a different logo image to the NON Sticky header?",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm3.png",
    lastUpdated: "4 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["css", "feature", "improvement", "weir"],
    badges: [],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 4,
    forumId: "forum-3",
    authorAvatar: "/img/home_support/cp4.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Sticky navbar is shown, but state is inactive",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm4.png",
    lastUpdated: "4 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["feature", "kbDoc", "spider", "richard"],
    badges: [
      { text: "Improvement !", color: "color-yellow" },
      { text: "CSS", color: "color-ass" },
    ],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 5,
    forumId: "forum-4",
    authorAvatar: "/img/home_support/cp5.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Performance issue uikit v3 and C3js",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm5.png",
    lastUpdated: "5 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["spider", "open", "weir"],
    badges: [],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 6,
    forumId: "forum-2",
    authorAvatar: "/img/home_support/cp6.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Course do not display properly",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm6.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["bug", "feature", "doc", "open", "druid", "dylan"],
    badges: [{ text: "Feature", color: "color-green" }],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 7,
    forumId: "forum-2",
    authorAvatar: "/img/home_support/cp10.png",
    title: "Apps/Integrations/APIs",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm7.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["spider", "doc", "open", "giles", "fletch"],
    badges: [],
    isFeatured: true,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 8,
    forumId: "forum-4",
    authorAvatar: "/img/home_support/cp7.png",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Course do not display properly",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm8.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["kbDoc", "bug", "open", "dylan"],
    badges: [
      { text: "Spider theme", color: "color-orange" },
      { text: "Open", color: "color-theme" },
    ],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 9,
    forumId: "forum-5",
    authorAvatar: "/img/home_support/cp8.png",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "UK-form-custom / select / multiple",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm9.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["giles", "mann"],
    badges: [],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 10,
    forumId: "forum-5",
    authorAvatar: "/img/home_support/cp9.png",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Change “courses” in URL permalink base",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm10.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["theodore", "fletch"],
    badges: [{ text: "Bug!", color: "color-pink" }],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 11,
    forumId: "forum-5",
    authorAvatar: "/img/home_support/cp2.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Disable animations for ui testing",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm2.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["mann"],
    badges: [],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
  {
    id: 12,
    forumId: "forum-3",
    authorAvatar: "/img/home_support/cp6.jpg",
    authorName: "Eh Jewel",
    authorBadge: "Conversation Starter",
    authorPostTime: "January 16 at 10:32 PM",
    title: "Lightbox zoom on mobile device",
    category: "WordPress Theme",
    categoryIcon: "/img/home_support/cmm11.png",
    lastUpdated: "6 days ago",
    TotalComments: 20,
    stars: 5,
    tags: ["theodore"],
    badges: [{ text: "Feature", color: "color-green" }],
    isFeatured: false,
    post: {
      title: "Sticky navbar is shown, but state is inactive",
      badge: "Features",
      content: `
      <p>Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.</p>
      <p>My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap.</p>
    `,
      tags: ["Bug", "Feature", "Error"],
      category: "KbDoc Support",
      categoryIcon: "/img/forum/logo-favicon.png",
      questionTooCount: 20,
    },
    bestAnswer: {
      author: {
        name: "Eh Jewel",
        avatar: "/img/home_support/cp2.jpg",
        badge: "Conversation Starter",
        postTime: "January 16 at 10:32 PM",
      },
      content: `
      <p>Hi, You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the save<br>changes button<br>Step 3 - Now you can click edit with Elementor button and start working<br><br>Thanks!</p>
    `,
    },
    comments: [
      {
        id: 1,
        author: {
          name: "Eh Jewel",
          avatar: "https://placehold.co/40x40/E8F0F2/333?text=EJ",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
      {
        id: 2,
        author: {
          name: "Parsley Montana",
          avatar: "https://placehold.co/40x40/7B52AB/FFF?text=PM",
          badge: "Moderator",
          postTime: "February 16 at 5:32 PM",
        },
        content:
          "<p>That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney.</p>",
      },
      {
        id: 3,
        author: {
          name: "Giles Posture",
          avatar: "https://placehold.co/40x40/3498DB/FFF?text=GP",
          badge: "Explorer",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!</p>",
      },
      {
        id: 4,
        author: {
          name: "Norman Gordon",
          avatar: "https://placehold.co/40x40/F1C40F/333?text=NG",
          badge: "Conversation Starter",
          postTime: "January 16 at 10:32 PM",
        },
        content:
          "<p>Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!</p>",
      },
    ],
  },
];

const topicsListWithFilteredForums = (forumId: string) => {
  return topicsList.filter((topic) => topic.forumId === forumId);
};

const getTopicById = (id: number) => {
  return topicsList.find((topic) => topic.id === id);
};

export { forumData, getTopicById, topicsList, topicsListWithFilteredForums };
