        // Set current year dynamically
        document.getElementById('currentYear').textContent = new Date().getFullYear();

       const arabicFonts = [
            {
                name: "طاجاوال (Tajawal)",
                category: "modern",
                example: "تجربة تصميم رائعة مع خط طاجاوال",
                fontFamily: "'Tajawal', sans-serif",
                fontWeight: "700",
                description: "الخط الأشهر في المواقع العربية الحديثة. يستخدم في الجزيرة، ياهو مكتوب، والعديد من المنصات الكبرى.",
                link: "https://fonts.google.com/specimen/Tajawal",
                popularity: 95
            },
            {
                name: "القاهرة (Cairo)",
                category: "modern",
                example: "إبداع بلا حدود مع خط القاهرة",
                fontFamily: "'Cairo', sans-serif",
                fontWeight: "700",
                description: "خط جريء وحديث يستخدم على نطاق واسع في العناوين الرئيسية للمواقع الإخبارية والتجارية.",
                link: "https://fonts.google.com/specimen/Cairo",
                popularity: 90
            },
            {
                name: "المراعي (Almarai)",
                category: "readable",
                example: "بوابتك نحو الوضوح والقراءة السهلة",
                fontFamily: "'Almarai', sans-serif",
                fontWeight: "700",
                description: "خط سهل القراءة يستخدم في مواقع مثل سوق.com ومنصات التجارة الإلكترونية الكبرى.",
                link: "https://fonts.google.com/specimen/Almarai",
                popularity: 85
            },
            {
                name: "أميري (Amiri)",
                category: "classic",
                example: "أناقة الماضي بلمسة عصرية",
                fontFamily: "'Amiri', serif",
                fontWeight: "700",
                description: "خط كلاسيكي أنيق مستوحى من الخط العربي التقليدي. يستخدم في المواقع الأدبية والثقافية.",
                link: "https://fonts.google.com/specimen/Amiri",
                popularity: 80
            },
            {
                name: "تغيير (Changa)",
                category: "modern",
                example: "خط عربي عصري مع لمسة فنية",
                fontFamily: "'Changa', sans-serif",
                fontWeight: "700",
                description: "خط عربي حديث مع لمسة فنية أنيقة. يستخدم في قنوات إم بي سي وبعض المنصات الإعلامية.",
                link: "https://fonts.google.com/specimen/Changa",
                popularity: 75
            },
            {
                name: "المسيري (El Messiri)",
                category: "classic",
                example: "أناقة ووضوح في خط المسيري",
                fontFamily: "'El Messiri', sans-serif",
                fontWeight: "700",
                description: "خط أنيق يجمع بين التقليدية والوضوح. يستخدم في المواقع الحكومية والتعليمية.",
                link: "https://fonts.google.com/specimen/El+Messiri",
                popularity: 70
            },
            {
                name: "شهرزاد جديد (Scheherazade New)",
                category: "classic",
                example: "روائع الحكايات مع شهرزاد",
                fontFamily: "'Scheherazade New', serif",
                fontWeight: "400",
                description: "مصمم خصيصاً للنصوص الطويلة والكتب. يستخدم في المكتبات الرقمية والمواقع الدينية.",
                link: "https://fonts.google.com/specimen/Scheherazade+New",
                popularity: 65
            },
            {
                name: "ليمونادة (Lemonada)",
                category: "decorative",
                example: "لمسة إبداعية مع ليمونادة",
                fontFamily: "'Lemonada', cursive",
                fontWeight: "600",
                description: "خط زخرفي مميز يضيف روحاً مرحة وإبداعية. يستخدم في المواقع الإبداعية والمدونات الشخصية.",
                link: "https://fonts.google.com/specimen/Lemonada",
                popularity: 60
            },
            {
                name: "جواهر (Jomhuria)",
                category: "decorative",
                example: "عناوين مميزة بخط جواهر",
                fontFamily: "'Jomhuria', cursive",
                fontWeight: "400",
                description: "خط زخرفي للعناوين والعبارات القصيرة. يستخدم في الشعارات والعناوين الرئيسية.",
                link: "https://fonts.google.com/specimen/Jomhuria",
                popularity: 55
            },
            {
                name: "لطيف (Lateef)",
                category: "classic",
                example: "لطافة وجمال في خط لطيف",
                fontFamily: "'Lateef', serif",
                fontWeight: "400",
                description: "خط تقليدي رائع للنصوص الدينية والأدبية. يستخدم في المواقع الدينية والتراثية.",
                link: "https://fonts.google.com/specimen/Lateef",
                popularity: 50
            },
            {
                name: "ميرزا (Mirza)",
                category: "classic",
                example: "جمال الخط العربي في أبها صوره",
                fontFamily: "'Mirza', serif",
                fontWeight: "400",
                description: "خط تقليدي أنيق للنصوص الأدبية والدينية. يستخدم في المواقع التراثية.",
                link: "https://fonts.google.com/specimen/Mirza",
                popularity: 45
            },
            {
                name: "أراف رقعة (Aref Ruqaa)",
                category: "classic",
                example: "روعة خط الرقعة بلمسة عصرية",
                fontFamily: "'Aref Ruqaa', serif",
                fontWeight: "700",
                description: "خط رقعة جميل يجمع بين الأصالة والوضوح. يستخدم في المواقع التقليدية.",
                link: "https://fonts.google.com/specimen/Aref+Ruqaa",
                popularity: 40
            },
            {
                name: "مَدا (Mada)",
                category: "modern",
                example: "بساطة وأناقة في خط مَدا",
                fontFamily: "'Mada', sans-serif",
                fontWeight: "400",
                description: "خط عربي حديث وبسيط للواجهات الحديثة. يستخدم في التطبيقات والمواقع البسيطة.",
                link: "https://fonts.google.com/specimen/Mada",
                popularity: 35
            },
            {
                name: "هرمتان (Harmattan)",
                category: "readable",
                example: "وضوح وسهولة في خط هرمتان",
                fontFamily: "'Harmattan', sans-serif",
                fontWeight: "400",
                description: "خط واضح وسهل القراءة للنصوص الطويلة. يستخدم في المدونات والمواقع الإخبارية.",
                link: "https://fonts.google.com/specimen/Harmattan",
                popularity: 30
            },
            {
                name: "روضة (Ruwudu)",
                category: "modern",
                example: "أناقة وحداثة في خط روضة",
                fontFamily: "'Ruwudu', serif",
                fontWeight: "400",
                description: "خط عربي حديث يجمع بين الأناقة والوضوح. يستخدم في المواقع الثقافية.",
                link: "https://fonts.google.com/specimen/Ruwudu",
                popularity: 25
            },
            {
                name: "نوتو نسخ عربي (Noto Naskh Arabic)",
                category: "readable",
                example: "وضوح لا مثيل له في الخط النسخ",
                fontFamily: "'Noto Naskh Arabic', serif",
                fontWeight: "400",
                description: "نسخة محسنة من الخط النسخ للقراءة الطويلة. يستخدم في المواقع التعليمية.",
                link: "https://fonts.google.com/noto/specimen/Noto+Naskh+Arabic",
                popularity: 20
            },
            {
                name: "كاتبة (Katibeh)",
                category: "decorative",
                example: "فن الخط العربي في خط كاتبة",
                fontFamily: "'Katibeh', cursive",
                fontWeight: "400",
                description: "خط زخرفي يعكس جمال الخط العربي التقليدي. يستخدم في الشعارات والعناوين.",
                link: "https://fonts.google.com/specimen/Katibeh",
                popularity: 15
            },
            {
                name: "أراف رقعة إنك (Aref Ruqaa Ink)",
                category: "classic",
                example: "تجديد رائع لخط الرقعة",
                fontFamily: "'Aref Ruqaa Ink', serif",
                fontWeight: "700",
                description: "نسخة محسنة من خط الرقعة بأناقة فائقة. يستخدم في المواقع العصرية ذات الطابع التقليدي.",
                link: "https://fonts.google.com/specimen/Aref+Ruqaa+Ink",
                popularity: 10
            },
            {
                name: "IBM بلكس سانس عربي",
                category: "modern",
                example: "احترافية وتقنية في خط آي بي إم",
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontWeight: "400",
                description: "خط احترافي للواجهات التقنية والشركات. يستخدم في مواقع الشركات التقنية.",
                link: "https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic",
                popularity: 5
            },
            {
                name: "روبيك (Rubik)",
                category: "modern",
                example: "مرونة وعصرية في خط روبيك",
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "400",
                description: "خط هندسي حديث للواجهات التفاعلية. يستخدم في التطبيقات والمواقع التفاعلية.",
                link: "https://fonts.google.com/specimen/Rubik",
                popularity: 5
            },
            {
                name: "فيبز (Vibes)",
                category: "decorative",
                example: "أناقة شرقية في خط فيبز",
                fontFamily: "'Vibes', cursive",
                fontWeight: "400",
                description: "خط زخرفي أنيق للمناسبات والعناوين. يستخدم في مواقع المناسبات والترفيه.",
                link: "https://fonts.google.com/specimen/Vibes",
                popularity: 5
            },
            {
                name: "بالو بيهاجان 2",
                category: "modern",
                example: "مرح وحيوية في خط بالو بيهاجان",
                fontFamily: "'Baloo Bhaijaan 2', cursive",
                fontWeight: "400",
                description: "خط ممتع للعناوين والعروض التقديمية. يستخدم في مواقع الأطفال والتعليم.",
                link: "https://fonts.google.com/specimen/Baloo+Bhaijaan+2",
                popularity: 5
            },
            {
                name: "گلزار (Gulzar)",
                category: "decorative",
                example: "فن الخط العربي في أبهى صوره",
                fontFamily: "'Gulzar', serif",
                fontWeight: "400",
                description: "خط زخرفي يعكس روعة الخط العربي التقليدي. يستخدم في المواقع الفنية.",
                link: "https://fonts.google.com/specimen/Gulzar",
                popularity: 5
            },
            {
                name: "نوتو سانس عربي (Noto Sans Arabic)",
                category: "readable",
                example: "وضوح وبساطة في خط نوتو سانس",
                fontFamily: "'Noto Sans Arabic', sans-serif",
                fontWeight: "400",
                description: "خط عربي واضح للواجهات والنصوص الطويلة. يستخدم في المواقع متعددة اللغات.",
                link: "https://fonts.google.com/noto/specimen/Noto+Sans+Arabic",
                popularity: 5
            },
            {
                name: "الكلعامي (Alkalami)",
                category: "classic",
                example: "أصالة وعراقة في خط الكلامي",
                fontFamily: "'Alkalami', serif",
                fontWeight: "400",
                description: "خط تقليدي يعكس أصالة الخط العربي. يستخدم في المواقع التراثية.",
                link: "https://fonts.google.com/specimen/Alkalami",
                popularity: 5
            },
            {
                name: "قهيري (Qahiri)",
                category: "decorative",
                example: "زخرفة وإبداع في خط قهيري",
                fontFamily: "'Qahiri', sans-serif",
                fontWeight: "400",
                description: "خط زخرفي مميز للعناوين والعبارات القصيرة. يستخدم في الشعارات.",
                link: "https://fonts.google.com/specimen/Qahiri",
                popularity: 5
            },
            {
                name: "ريم كوفي فن (Reem Kufi Fun)",
                category: "decorative",
                example: "مرح وإبداع في خط ريم كوفي",
                fontFamily: "'Reem Kufi Fun', sans-serif",
                fontWeight: "400",
                description: "خط كوفي معاصر بمظهر مرح. يستخدم في مواقع الترفيه والأطفال.",
                link: "https://fonts.google.com/specimen/Reem+Kufi+Fun",
                popularity: 5
            },
            {
                name: "زين (Zain)",
                category: "modern",
                example: "أناقة وبساطة في خط زين",
                fontFamily: "'Zain', sans-serif",
                fontWeight: "400",
                description: "خط عربي حديث بمظهر أنيق وبسيط. يستخدم في العلامات التجارية.",
                link: "https://fonts.google.com/specimen/Zain",
                popularity: 5
            },
            {
                name: "رَكَّاس (Rakkas)",
                category: "decorative",
                example: "زخرفة وإبداع في خط ركاس",
                fontFamily: "'Rakkas', cursive",
                fontWeight: "400",
                description: "خط زخرفي مميز للعناوين والعبارات القصيرة. يستخدم في المواقع الإبداعية.",
                link: "https://fonts.google.com/specimen/Rakkas",
                popularity: 5
            },
            {
                name: "ماركازي (Markazi Text)",
                category: "readable",
                example: "نصوص طويلة بكل وضوح وسلاسة",
                fontFamily: "'Markazi Text', serif",
                fontWeight: "400",
                description: "مصمم خصيصاً للنصوص الطويلة والمقالات. يستخدم في المدونات والمواقع الإخبارية.",
                link: "https://fonts.google.com/specimen/Markazi+Text",
                popularity: 5
            },
            {
                name: "ريم كوفي (Reem Kufi)",
                category: "modern",
                example: "خط كوفي معاصر بأناقة فريدة",
                fontFamily: "'Reem Kufi', sans-serif",
                fontWeight: "400",
                description: "خط كوفي معاصر يجمع بين الأصالة والحداثة. يستخدم في المواقع العصرية.",
                link: "https://fonts.google.com/specimen/Reem+Kufi",
                popularity: 5
            },
            {
                name: "خط اليد (Kalam)",
                category: "decorative",
                example: "لمسة بشرية في خط اليد",
                fontFamily: "'Kalam', cursive",
                fontWeight: "400",
                description: "خط يحاكي الكتابة اليدوية بمظهر طبيعي. يستخدم في المواقع الشخصية.",
                link: "https://fonts.google.com/specimen/Kalam",
                popularity: 5
            },
            {
                name: "لوبستر (Lobster)",
                category: "decorative",
                example: "أناقة غربية في خط لوبستر",
                fontFamily: "'Lobster', cursive",
                fontWeight: "400",
                description: "خط زخرفي ذو طابع غربي مع تكييف للعربية. يستخدم في العلامات التجارية.",
                link: "https://fonts.google.com/specimen/Lobster",
                popularity: 5
            },
            {
                name: "باسكرفيل (Libre Baskerville)",
                category: "classic",
                example: "وقار وجاذبية في خط باسكرفيل",
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: "400",
                description: "خط كلاسيكي أنيق بمظهر احترافي. يستخدم في المواقع الرسمية.",
                link: "https://fonts.google.com/specimen/Libre+Baskerville",
                popularity: 5
            },
            {
                name: "لورا (Lora)",
                category: "classic",
                example: "أناقة ودفء في خط لورا",
                fontFamily: "'Lora', serif",
                fontWeight: "400",
                description: "خط رصين بمظهر دافئ وأنيق. يستخدم في المدونات والمواقع الأدبية.",
                link: "https://fonts.google.com/specimen/Lora",
                popularity: 5
            },
            {
                name: "بلاي فير (Playfair Display)",
                category: "classic",
                example: "فخامة وتميز في خط بلاي فير",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "400",
                description: "خط أنيق بمظهر فاخر وكلاسيكي. يستخدم في مواقع الرفاهية.",
                link: "https://fonts.google.com/specimen/Playfair+Display",
                popularity: 5
            },
            {
                name: "مونسيرات (Montserrat)",
                category: "modern",
                example: "بساطة وعصرية في خط مونسيرات",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "400",
                description: "خط هندسي حديث بمظهر نظيف واحترافي. يستخدم في المواقع العالمية.",
                link: "https://fonts.google.com/specimen/Montserrat",
                popularity: 5
            },
            {
                name: "أوبن سانس (Open Sans)",
                category: "readable",
                example: "وضوح وسهولة في خط أوبن سانس",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "400",
                description: "خط واضح وسهل القراءة للنصوص الطويلة. يستخدم في المواقع العالمية.",
                link: "https://fonts.google.com/specimen/Open+Sans",
                popularity: 5
            },
            {
                name: "بوبينز (Poppins)",
                category: "modern",
                example: "أناقة هندسية في خط بوبينز",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
                description: "خط هندسي حديث بمظهر أنيق وجميل. يستخدم في المواقع الحديثة.",
                link: "https://fonts.google.com/specimen/Poppins",
                popularity: 5
            },
            {
                name: "راليوي (Raleway)",
                category: "modern",
                example: "أناقة وتباين في خط راليوي",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "400",
                description: "خط أنيق بمظهر احترافي وتباين جيد. يستخدم في العلامات التجارية.",
                link: "https://fonts.google.com/specimen/Raleway",
                popularity: 5
            },
            {
                name: "روبوتو (Roboto)",
                category: "modern",
                example: "وظيفية وبساطة في خط روبوتو",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "400",
                description: "خط وظيفي وواضح للواجهات الحديثة. يستخدم في التطبيقات والمواقع.",
                link: "https://fonts.google.com/specimen/Roboto",
                popularity: 5
            },
            {
                name: "أوسوالد (Oswald)",
                category: "modern",
                example: "جرأة ووضوح في خط أوسوالد",
                fontFamily: "'Oswald', sans-serif",
                fontWeight: "400",
                description: "خط جريء وواضح للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Oswald",
                popularity: 5
            },
            {
                name: "لato (Lato)",
                category: "modern",
                example: "دفء ووضوح في خط لاتو",
                fontFamily: "'Lato', sans-serif",
                fontWeight: "400",
                description: "خط دافئ وواضح للنصوص الطويلة. يستخدم في المدونات والمواقع.",
                link: "https://fonts.google.com/specimen/Lato",
                popularity: 5
            },
            {
                name: "سورس سانس (Source Sans Pro)",
                category: "modern",
                example: "وظيفية ومرونة في خط سورس سانس",
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: "400",
                description: "خط وظيفي ومرن للواجهات الحديثة. يستخدم في التطبيقات والمواقع.",
                link: "https://fonts.google.com/specimen/Source+Sans+Pro",
                popularity: 5
            },
            {
                name: "يانون (Yanone Kaffeesatz)",
                category: "modern",
                example: "تميز وبساطة في خط يانون",
                fontFamily: "'Yanone Kaffeesatz', sans-serif",
                fontWeight: "400",
                description: "خط مكثف وواضح للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Yanone+Kaffeesatz",
                popularity: 5
            },
            {
                name: "أوبن سانس كوندنسد (Open Sans Condensed)",
                category: "modern",
                example: "كثافة ووضوح في خط أوبن سانس",
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontWeight: "400",
                description: "خط مكثف وواضح للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Open+Sans+Condensed",
                popularity: 5
            },
            {
                name: "أنطون (Anton)",
                category: "modern",
                example: "جرأة وقوة في خط أنطون",
                fontFamily: "'Anton', sans-serif",
                fontWeight: "400",
                description: "خط جريء وقوي للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Anton",
                popularity: 5
            },
            {
                name: "فجا (Fjalla One)",
                category: "modern",
                example: "قوة ووضوح في خط فجلا",
                fontFamily: "'Fjalla One', sans-serif",
                fontWeight: "400",
                description: "خط قوي وواضح للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Fjalla+One",
                popularity: 5
            },
            {
                name: "أرتشيفو (Archivo)",
                category: "modern",
                example: "وظيفية وتنوع في خط أرتشيفو",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "400",
                description: "خط وظيفي ومتنوع للواجهات الحديثة. يستخدم في التطبيقات والمواقع.",
                link: "https://fonts.google.com/specimen/Archivo",
                popularity: 5
            },
            {
                name: "أرتشيفو نارو (Archivo Narrow)",
                category: "modern",
                example: "كثافة ووظيفية في خط أرتشيفو",
                fontFamily: "'Archivo Narrow', sans-serif",
                fontWeight: "400",
                description: "خط مكثف ووظيفي للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Archivo+Narrow",
                popularity: 5
            },
            {
                name: "فرانكلين (Frank Ruhl Libre)",
                category: "classic",
                example: "وقار وجاذبية في خط فرانكلين",
                fontFamily: "'Frank Ruhl Libre', serif",
                fontWeight: "400",
                description: "خط كلاسيكي أنيق بمظهر احترافي. يستخدم في المواقع الرسمية.",
                link: "https://fonts.google.com/specimen/Frank+Ruhl+Libre",
                popularity: 5
            },
            {
                name: "أليغري (Alegreya)",
                category: "classic",
                example: "أناقة ودفء في خط أليغري",
                fontFamily: "'Alegreya', serif",
                fontWeight: "400",
                description: "خط رصين بمظهر دافئ وأنيق. يستخدم في المدونات والمواقع الأدبية.",
                link: "https://fonts.google.com/specimen/Alegreya",
                popularity: 5
            },
            {
                name: "أليغري سانس (Alegreya Sans)",
                category: "modern",
                example: "بساطة وأناقة في خط أليغري",
                fontFamily: "'Alegreya Sans', sans-serif",
                fontWeight: "400",
                description: "خط أنيق وبسيط للواجهات الحديثة. يستخدم في المواقع الثقافية.",
                link: "https://fonts.google.com/specimen/Alegreya+Sans",
                popularity: 5
            },
            {
                name: "ميريويذر (Merriweather)",
                category: "classic",
                example: "وقار وجاذبية في خط ميريويذر",
                fontFamily: "'Merriweather', serif",
                fontWeight: "400",
                description: "خط كلاسيكي أنيق بمظهر احترافي. يستخدم في المواقع الإخبارية.",
                link: "https://fonts.google.com/specimen/Merriweather",
                popularity: 5
            },
            {
                name: "ميريويذر سانس (Merriweather Sans)",
                category: "modern",
                example: "بساطة وأناقة في خط ميريويذر",
                fontFamily: "'Merriweather Sans', sans-serif",
                fontWeight: "400",
                description: "خط أنيق وبسيط للواجهات الحديثة. يستخدم في المواقع الإخبارية.",
                link: "https://fonts.google.com/specimen/Merriweather+Sans",
                popularity: 5
            },
            {
                name: "بوربون (Burbank)",
                category: "decorative",
                example: "جرأة وتميز في خط بوربون",
                fontFamily: "'Burbank', sans-serif",
                fontWeight: "400",
                description: "خط جريء ومميز للعناوين والعروض. يستخدم في المواقع الإعلانية.",
                link: "https://fonts.google.com/specimen/Burbank",
                popularity: 5
            }
        ];



        // Websites data
        const arabicWebsites = [
            { name: "الجزيرة", font: "طاجاوال - القاهرة", icon: "newspaper" },
            { name: "سوق.كوم", font: "المراعي - أميري", icon: "shopping-cart" },
            { name: "إم بي سي", font: "القاهرة - تغيير", icon: "tv" },
            { name: "ياهو مكتوب", font: "طاجاوال - المسيري", icon: "search" },
            { name: "العربية", font: "طاجاوال - القاهرة", icon: "globe" },
            { name: "الرياض", font: "أميري - لطيف", icon: "newspaper" },
            { name: "البيان", font: "القاهرة - طاجاوال", icon: "file-alt" },
            { name: "الشرق الأوسط", font: "أميري - القاهرة", icon: "globe" }
        ];

        // Configuration
        const FONTS_PER_PAGE = 9;
        let currentPage = 1;
        let currentFilter = 'all';
        let currentSearch = '';
        let currentLanguage = 'ar';
        let previewHistory = [];
        let autoUpdateEnabled = true;

        // Function to simulate loading with enhanced progress bar
        function simulateLoading() {
            const loadingScreen = document.getElementById('loadingScreen');
            const progressBar = document.getElementById('progressBar');
            const loadingPercentage = document.getElementById('loadingPercentage');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    // Hide loading screen after a short delay
                    setTimeout(() => {
                        loadingScreen.style.opacity = '0';
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                        }, 800);
                    }, 500);
                }
                
                progressBar.style.width = `${progress}%`;
                loadingPercentage.textContent = `${Math.round(progress)}%`;
            }, 200);
        }

        // Function to save data to localStorage
        function saveToLocalStorage() {
            const appData = {
                currentLanguage: currentLanguage,
                currentFilter: currentFilter,
                currentSearch: currentSearch,
                currentPage: currentPage,
                previewHistory: previewHistory,
                autoUpdateEnabled: autoUpdateEnabled,
                lastVisit: new Date().toISOString()
            };
            
            localStorage.setItem('arabicFontsApp', JSON.stringify(appData));
        }

        // Function to load data from localStorage
        function loadFromLocalStorage() {
            const savedData = localStorage.getItem('arabicFontsApp');
            if (savedData) {
                const appData = JSON.parse(savedData);
                currentLanguage = appData.currentLanguage || 'ar';
                currentFilter = appData.currentFilter || 'all';
                currentSearch = appData.currentSearch || '';
                currentPage = appData.currentPage || 1;
                previewHistory = appData.previewHistory || [];
                autoUpdateEnabled = appData.autoUpdateEnabled !== false;
                
                // Apply saved language
                switchLanguage(currentLanguage);
                
                // Apply saved search
                document.querySelector('.search-box').value = currentSearch;
                
                // Apply saved history
                renderPreviewHistory();
                
                // Apply saved filter
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
                });
            }
        }

        // Function to render preview history
        function renderPreviewHistory() {
            const historyContainer = document.getElementById('previewHistory');
            historyContainer.innerHTML = '';
            
            if (previewHistory.length === 0) return;
            
            // Add clear all button
            const clearAllBtn = document.createElement('div');
            clearAllBtn.className = 'history-item';
            clearAllBtn.innerHTML = `
                <button class="history-clear" title="${currentLanguage === 'ar' ? 'مسح الكل' : 'Clear All'}">
                    <i class="fas fa-trash"></i>
                </button>
                ${currentLanguage === 'ar' ? 'مسح الكل' : 'Clear All'}
            `;
            clearAllBtn.addEventListener('click', clearPreviewHistory);
            historyContainer.appendChild(clearAllBtn);
            
            // Add history items (show last 5)
            const recentHistory = previewHistory.slice(-5).reverse();
            recentHistory.forEach((text, index) => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <span>${text}</span>
                    <button class="history-clear" title="${currentLanguage === 'ar' ? 'إزالة' : 'Remove'}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                historyItem.addEventListener('click', (e) => {
                    if (!e.target.closest('.history-clear')) {
                        document.getElementById('previewInput').value = text;
                        updateFontPreviews(text);
                    }
                });
                
                const clearBtn = historyItem.querySelector('.history-clear');
                clearBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    removeFromPreviewHistory(text);
                });
                
                historyContainer.appendChild(historyItem);
            });
        }

        // Function to add text to preview history
        function addToPreviewHistory(text) {
            if (!text || text.trim() === '') return;
            
            // Remove if already exists
            previewHistory = previewHistory.filter(item => item !== text);
            
            // Add to the end
            previewHistory.push(text);
            
            // Keep only last 10 items
            if (previewHistory.length > 10) {
                previewHistory = previewHistory.slice(-10);
            }
            
            renderPreviewHistory();
            saveToLocalStorage();
        }

        // Function to remove text from preview history
        function removeFromPreviewHistory(text) {
            previewHistory = previewHistory.filter(item => item !== text);
            renderPreviewHistory();
            saveToLocalStorage();
        }

        // Function to clear preview history
        function clearPreviewHistory() {
            previewHistory = [];
            renderPreviewHistory();
            saveToLocalStorage();
        }

        // Function to update font previews with custom text
        function updateFontPreviews(text = null) {
            const previewText = text || document.getElementById('previewInput').value;
            
            if (previewText.trim() === '') {
                // Reset to default examples if empty
                document.querySelectorAll('.font-example').forEach((example, index) => {
                    if (arabicFonts[index]) {
                        example.textContent = arabicFonts[index].example;
                    }
                });
                return;
            }
            
            // Update all font examples
            document.querySelectorAll('.font-example').forEach(example => {
                example.textContent = previewText;
            });
            
            // Add to history if it's a new text
            if (text === null) {
                addToPreviewHistory(previewText);
            }
            
            saveToLocalStorage();
        }

        // Function to clear preview text
        function clearPreviewText() {
            document.getElementById('previewInput').value = '';
            updateFontPreviews('');
        }

        // Function to render fonts
        function renderFonts(fonts, page = 1) {
            const container = document.getElementById('fontContainer');
            const loadingIndicator = document.getElementById('loadingIndicator');
            
            // Show loading
            container.classList.add('hidden');
            loadingIndicator.classList.remove('hidden');
            
            // Sort by popularity
            fonts.sort((a, b) => b.popularity - a.popularity);
            
            // Calculate pagination
            const startIndex = (page - 1) * FONTS_PER_PAGE;
            const endIndex = startIndex + FONTS_PER_PAGE;
            const paginatedFonts = fonts.slice(startIndex, endIndex);
            
            // Simulate loading delay for better UX
            setTimeout(() => {
                container.innerHTML = '';
                
                if (paginatedFonts.length === 0) {
                    container.innerHTML = '<div class="no-results" style="text-align: center; padding: 2rem; grid-column: 1 / -1;">' + 
                        (currentLanguage === 'ar' ? 'لا توجد نتائج تطابق بحثك' : 'No results match your search') + '</div>';
                } else {
                    paginatedFonts.forEach(font => {
                        const fontCard = document.createElement('div');
                        fontCard.className = `font-card ${font.category}`;
                        
                        // Use current preview text if available, otherwise use font example
                        const currentInput = document.getElementById('previewInput').value;
                        const displayText = currentInput && currentInput.trim() !== '' ? currentInput : font.example;
                        
                        fontCard.innerHTML = `
                            <div class="font-header">
                                <h3 class="font-name">${font.name}</h3>
                                <span class="font-category">${getCategoryName(font.category)}</span>
                            </div>
                            <div class="font-preview">
                                <div class="font-example" style="font-family: ${font.fontFamily}; font-weight: ${font.fontWeight}">
                                    ${displayText}
                                </div>
                                <p class="font-description">${font.description}</p>
                                <div class="font-usage">
                                    font-family: ${font.fontFamily};
                                </div>
                                <a href="${font.link}" target="_blank" class="font-link">
                                    <i class="fas fa-external-link-alt"></i> ${currentLanguage === 'ar' ? 'رابط الخط على Google Fonts' : 'Font link on Google Fonts'}
                                </a>
                            </div>
                        `;
                        container.appendChild(fontCard);
                    });
                }
                
                // Hide loading and show content
                loadingIndicator.classList.add('hidden');
                container.classList.remove('hidden');
                
                // Update displayed fonts count
                document.getElementById('displayedFonts').textContent = fonts.length;
                
                // Render pagination
                renderPagination(fonts.length, page);
                
                // Save to localStorage
                saveToLocalStorage();
            }, 300);
        }

        // Function to render pagination
        function renderPagination(totalFonts, currentPage) {
            const totalPages = Math.ceil(totalFonts / FONTS_PER_PAGE);
            const paginationContainer = document.getElementById('pagination');
            
            if (totalPages <= 1) {
                paginationContainer.innerHTML = '';
                return;
            }
            
            let paginationHTML = '';
            
            // Previous button
            if (currentPage > 1) {
                paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">${currentLanguage === 'ar' ? 'السابق' : 'Previous'}</button>`;
            }
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                if (i === currentPage) {
                    paginationHTML += `<button class="page-btn active" data-page="${i}">${i}</button>`;
                } else {
                    paginationHTML += `<button class="page-btn" data-page="${i}">${i}</button>`;
                }
            }
            
            // Next button
            if (currentPage < totalPages) {
                paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">${currentLanguage === 'ar' ? 'التالي' : 'Next'}</button>`;
            }
            
            paginationContainer.innerHTML = paginationHTML;
            
            // Add event listeners to pagination buttons
            paginationContainer.querySelectorAll('.page-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const page = parseInt(this.getAttribute('data-page'));
                    currentPage = page;
                    applyFiltersAndSearch();
                });
            });
        }

        // Function to render websites
        function renderWebsites() {
            const container = document.getElementById('websitesContainer');
            container.innerHTML = '';
            
            arabicWebsites.forEach(website => {
                const websiteCard = document.createElement('div');
                websiteCard.className = 'website-card';
                websiteCard.innerHTML = `
                    <div class="website-icon"><i class="fas fa-${website.icon}"></i></div>
                    <div class="website-name">${website.name}</div>
                    <div class="website-font">${website.font}</div>
                `;
                container.appendChild(websiteCard);
            });
        }

        // Helper function to get category name in Arabic
        function getCategoryName(category) {
            const categories = {
                'modern': currentLanguage === 'ar' ? 'حديث' : 'Modern',
                'classic': currentLanguage === 'ar' ? 'تقليدي' : 'Classic',
                'decorative': currentLanguage === 'ar' ? 'زخرفي' : 'Decorative',
                'readable': currentLanguage === 'ar' ? 'سهل القراءة' : 'Readable'
            };
            return categories[category] || category;
        }

        // Function to apply filters and search
        function applyFiltersAndSearch() {
            let filteredFonts = arabicFonts;
            
            // Apply category filter
            if (currentFilter !== 'all') {
                filteredFonts = filteredFonts.filter(font => font.category === currentFilter);
            }
            
            // Apply search filter
            if (currentSearch) {
                const searchTerm = currentSearch.toLowerCase();
                filteredFonts = filteredFonts.filter(font => 
                    font.name.toLowerCase().includes(searchTerm) || 
                    font.description.toLowerCase().includes(searchTerm) ||
                    font.example.toLowerCase().includes(searchTerm)
                );
            }
            
            renderFonts(filteredFonts, currentPage);
        }

        // Function to switch language
        function switchLanguage(lang) {
            currentLanguage = lang;
            document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            
            // Update language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
            
            // Update all elements with data attributes
            document.querySelectorAll('[data-ar], [data-en]').forEach(element => {
                element.textContent = element.getAttribute(`data-${lang}`);
            });
            
            // Update placeholders
            document.querySelectorAll('[data-ar-placeholder], [data-en-placeholder]').forEach(element => {
                element.setAttribute('placeholder', element.getAttribute(`data-${lang}-placeholder`));
            });
            
            // Re-render history
            renderPreviewHistory();
            
            // Re-render fonts to update language-specific content
            applyFiltersAndSearch();
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Update current filter and reset to page 1
                currentFilter = this.getAttribute('data-filter');
                currentPage = 1;
                applyFiltersAndSearch();
            });
        });

        // Search functionality
        document.querySelector('.search-box').addEventListener('input', function() {
            currentSearch = this.value;
            currentPage = 1;
            applyFiltersAndSearch();
        });

        // Language toggle functionality
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                switchLanguage(lang);
            });
        });

        // Preview functionality
        document.getElementById('previewBtn').addEventListener('click', () => updateFontPreviews());
        document.getElementById('clearPreviewBtn').addEventListener('click', clearPreviewText);
        
        // Real-time preview updates
        let previewTimeout;
        document.getElementById('previewInput').addEventListener('input', function() {
            // Clear previous timeout
            clearTimeout(previewTimeout);
            
            // Set new timeout for real-time update (300ms delay)
            previewTimeout = setTimeout(() => {
                if (autoUpdateEnabled && this.value.trim() !== '') {
                    updateFontPreviews();
                }
            }, 300);
        });
        
        // Enter key for preview input
        document.getElementById('previewInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updateFontPreviews();
            }
        });
        
        // Example text clicks
        document.querySelectorAll('.preview-example').forEach(example => {
            example.addEventListener('click', function() {
                const text = this.getAttribute('data-text');
                document.getElementById('previewInput').value = text;
                updateFontPreviews(text);
            });
        });

        // Initial render
        document.addEventListener('DOMContentLoaded', function() {
            // Start loading simulation
            simulateLoading();
            
            // Load data from localStorage
            loadFromLocalStorage();
            
            // Render initial content
            renderFonts(arabicFonts);
            renderWebsites();
            document.getElementById('totalFonts').textContent = arabicFonts.length;
        });