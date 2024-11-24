const dummyData = [
  {
    id: 1,
    shopName: "สมชายบริการรถลาก",
    fullName: "สมชาย ใจดี",
    address: "123/4 ถนนสายสุข อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "SomchaiTowService",
    line: "@towservice1",
    email: "somchai.tow@example.com",
  },
  {
    id: 2,
    shopName: "กานดารถยกด่วน",
    fullName: "กานดา วรชัย",
    address: "45/6 หมู่ 2 ซอยเขาน้อย ตำบลบางละมุง จังหวัดชลบุรี",
    facebookName: "KandaTowExpress",
    line: "@towservice2",
    email: "kanda.tow@example.com",
  },
  {
    id: 3,
    shopName: "ธนพลบริการรถลาก",
    fullName: "ธนพล บุญรักษา",
    address: "78/9 ถนนประชาชื่น เขตบางซื่อ กรุงเทพฯ",
    facebookName: "TanaponTowTruck",
    line: "@towservice3",
    email: "tanapon.tow@example.com",
  },
  {
    id: 4,
    shopName: "วรรณาบริการรถลาก",
    fullName: "วรรณา เพ็ญศรี",
    address: "12/7 ซอยรามคำแหง 24 เขตบางกะปิ กรุงเทพฯ",
    facebookName: "WannaTowService",
    line: "@towservice4",
    email: "wanna.tow@example.com",
  },
  {
    id: 5,
    shopName: "จักรพงษ์รถยกและบริการ",
    fullName: "จักรพงษ์ สินทรัพย์",
    address: "89/2 ถนนพหลโยธิน อำเภอเมือง จังหวัดปทุมธานี",
    facebookName: "ChakTowService",
    line: "@towservice5",
    email: "chak.tow@example.com",
  },
  {
    id: 6,
    shopName: "ยุพารถยกทั่วไทย",
    fullName: "ยุพา วัฒนชัย",
    address: "42/9 หมู่ 5 ตำบลสำโรงใต้ อำเภอพระประแดง จังหวัดสมุทรปราการ",
    facebookName: "YupaTow",
    line: "@towservice6",
    email: "yupa.tow@example.com",
  },
  {
    id: 7,
    shopName: "สุนทรบริการลากรถด่วน",
    fullName: "สุนทร รักสัตว์",
    address: "99/10 ถนนราชดำเนิน เขตพระนคร กรุงเทพฯ",
    facebookName: "SunTowExpress",
    line: "@towservice7",
    email: "sunthorn.tow@example.com",
  },
  {
    id: 8,
    shopName: "ดารณีบริการลากรถ",
    fullName: "ดารณี บุญศิริ",
    address: "15/3 ถนนลำลูกกา อำเภอลำลูกกา จังหวัดปทุมธานี",
    facebookName: "DaraneeTowTruck",
    line: "@towservice8",
    email: "daranee.tow@example.com",
  },
  {
    id: 9,
    shopName: "วชิรารถยกครบวงจร",
    fullName: "วชิรา สุขสม",
    address: "67/8 ซอยลาดพร้าว 71 เขตวังทองหลาง กรุงเทพฯ",
    facebookName: "VachiraTowService",
    line: "@towservice9",
    email: "vachira.tow@example.com",
  },
  {
    id: 10,
    shopName: "ภานุวัฒน์ลากรถทั่วไทย",
    fullName: "ภานุวัฒน์ ชัยวัฒน์",
    address: "120/4 ถนนสุขาภิบาล 5 เขตสายไหม กรุงเทพฯ",
    facebookName: "PanuTowTruck",
    line: "@towservice10",
    email: "panuwat.tow@example.com",
  },
  {
    id: 11,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 12,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 13,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 14,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 15,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 16,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 17,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 18,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 19,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 20,
    shopName: "วารีบริการรถลาก",
    fullName: "วารี ศิริชัย",
    address: "71/2 ซอยจรัญสนิทวงศ์ 95 เขตบางพลัด กรุงเทพฯ",
    facebookName: "WareeTowTruck",
    line: "@towservice20",
    email: "waree.tow@example.com",
  },
  {
    id: 21,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 22,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 23,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 24,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 25,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 26,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 27,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 28,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 29,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 30,
    shopName: "วารีบริการรถลาก",
    fullName: "วารี ศิริชัย",
    address: "71/2 ซอยจรัญสนิทวงศ์ 95 เขตบางพลัด กรุงเทพฯ",
    facebookName: "WareeTowTruck",
    line: "@towservice20",
    email: "waree.tow@example.com",
  },
  {
    id: 31,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 32,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 33,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 34,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 35,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 36,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 37,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 38,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 39,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 40,
    shopName: "วารีบริการรถลาก",
    fullName: "วารี ศิริชัย",
    address: "71/2 ซอยจรัญสนิทวงศ์ 95 เขตบางพลัด กรุงเทพฯ",
    facebookName: "WareeTowTruck",
    line: "@towservice20",
    email: "waree.tow@example.com",
  },
  {
    id: 41,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 42,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 43,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 44,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 45,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 46,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 47,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 48,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 49,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 50,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
  {
    id: 51,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 52,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 53,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 54,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 55,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 56,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 57,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 58,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 59,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 60,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
  {
    id: 61,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 62,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 63,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 64,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 65,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 66,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 67,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 68,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 69,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 70,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
  {
    id: 71,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 72,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 73,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 74,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 75,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 76,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 77,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 78,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 79,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 80,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
  {
    id: 81,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 82,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 83,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 84,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 85,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 86,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 87,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 88,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 89,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 90,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
  {
    id: 91,
    shopName: "กิติยารถยกบริการด่วน",
    fullName: "กิติยา โชคชัย",
    address: "35/6 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ",
    facebookName: "KitiyaTowService",
    line: "@towservice11",
    email: "kitiya.tow@example.com",
  },
  {
    id: 92,
    shopName: "มาริสารถลาก 24 ชั่วโมง",
    fullName: "มาริสา ศิลปกร",
    address: "52/7 หมู่ 4 ตำบลป่าแดด อำเภอเมือง จังหวัดเชียงใหม่",
    facebookName: "MarisaTowTruck",
    line: "@towservice12",
    email: "marisa.tow@example.com",
  },
  {
    id: 93,
    shopName: "วิรัตน์บริการลากรถ",
    fullName: "วิรัตน์ รัตนชัย",
    address: "16/3 ถนนศรีนครินทร์ เขตประเวศ กรุงเทพฯ",
    facebookName: "WiratTowTruck",
    line: "@towservice13",
    email: "wirat.tow@example.com",
  },
  {
    id: 94,
    shopName: "พัชรีรถยกฉุกเฉิน",
    fullName: "พัชรี สุขสมบัติ",
    address: "89/6 ซอยสุขุมวิท 101 เขตพระโขนง กรุงเทพฯ",
    facebookName: "PatchareeTowService",
    line: "@towservice14",
    email: "patcharee.tow@example.com",
  },
  {
    id: 95,
    shopName: "อรพรรณบริการรถลาก",
    fullName: "อรพรรณ แสงทอง",
    address: "45/2 ถนนราชพฤกษ์ อำเภอปากเกร็ด จังหวัดนนทบุรี",
    facebookName: "OnTowTruck",
    line: "@towservice15",
    email: "ornpan.tow@example.com",
  },
  {
    id: 96,
    shopName: "ธีรศักดิ์รถยกครบวงจร",
    fullName: "ธีรศักดิ์ ชนะบุญ",
    address: "33/1 ถนนวิภาวดีรังสิต เขตจตุจักร กรุงเทพฯ",
    facebookName: "TeerasakTowService",
    line: "@towservice16",
    email: "teerasak.tow@example.com",
  },
  {
    id: 97,
    shopName: "ปิยวรรณลากรถปลอดภัย",
    fullName: "ปิยวรรณ หอมหวาน",
    address: "102/4 ซอยประชาอุทิศ 90 เขตทุ่งครุ กรุงเทพฯ",
    facebookName: "PiyaTowService",
    line: "@towservice17",
    email: "piyawan.tow@example.com",
  },
  {
    id: 98,
    shopName: "อนุวัฒน์บริการลากรถ",
    fullName: "อนุวัฒน์ ใจกล้า",
    address: "11/5 ถนนกาญจนาภิเษก เขตบางแค กรุงเทพฯ",
    facebookName: "AnuTowTruck",
    line: "@towservice18",
    email: "anuwat.tow@example.com",
  },
  {
    id: 99,
    shopName: "ปฐมชัยรถยกทั่วไทย",
    fullName: "ปฐมชัย ตะวันออก",
    address: "29/7 หมู่ 6 ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา",
    facebookName: "PathomTowTruck",
    line: "@towservice19",
    email: "pathomchai.tow@example.com",
  },
  {
    id: 100,
    shopName: "เจริญรถยกด่วนพิเศษ",
    fullName: "เจริญ ศิริวัฒนา",
    address: "89/9 ถนนรามอินทรา เขตมีนบุรี กรุงเทพฯ",
    facebookName: "CharoenTowExpress",
    line: "@towservice50",
    email: "charoen.tow@example.com",
  },
];

export default dummyData;