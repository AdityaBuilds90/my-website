const bmwModels = [
  {
    "name": "BMW 2002 Turbo",
    "year": "1973–1975",
    "body": "Compact Coupe",
    "hp": 170,
    "topSpeed": 211,
    "accel": "7.0 s",
    "drive": "RWD",
    "trans": "4‑MT",
    "price": "$7,000 (1974 MSRP)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/BMW_2002_turbo_front_20100815.jpg",
    "colors": [
      {
        "name": "Chamonix White",
        "hex": "#F2F2F2"
      },
      {
        "name": "Polaris Silver",
        "hex": "#C0C0C0"
      },
      {
        "name": "Inka Orange",
        "hex": "#F47C2E"
      }
    ]
  },
  {
    "name": "BMW 3.0 CSL (E9)",
    "year": "1972–1975",
    "body": "Coupe",
    "hp": 206,
    "topSpeed": 220,
    "accel": "7.2 s",
    "drive": "RWD",
    "trans": "4‑MT",
    "price": "$12,000 (1973)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/BMW_E9_3.0_CSL_%E2%80%93_Frontansicht%2C_3._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg",
    "colors": [
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Fjord Blue",
        "hex": "#6699CC"
      },
      {
        "name": "Golf Yellow",
        "hex": "#F1D23A"
      }
    ]
  },
  {
    "name": "BMW M1 (E26)",
    "year": "1978–1981",
    "body": "Mid‑engine Coupe",
    "hp": 273,
    "topSpeed": 262,
    "accel": "5.6 s",
    "drive": "RWD",
    "trans": "5‑MT",
    "price": "$115,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/BMW_M1_%281979%29_%282017-08-11%29_01.jpg",
    "colors": [
      {
        "name": "Orange",
        "hex": "#FF6A00"
      },
      {
        "name": "White",
        "hex": "#F2F2F2"
      },
      {
        "name": "Red",
        "hex": "#C60021"
      }
    ]
  },
  {
    "name": "BMW E30 M3",
    "year": "1986–1991",
    "body": "Compact Coupe",
    "hp": 200,
    "topSpeed": 235,
    "accel": "6.7 s",
    "drive": "RWD",
    "trans": "5‑MT",
    "price": "$35,000 (1987)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/1988_BMW_M3.jpg",
    "colors": [
      {
        "name": "Zinnoberrot Red",
        "hex": "#B90F1A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Diamond Black",
        "hex": "#1A1A1A"
      }
    ]
  },
  {
    "name": "BMW E36 M3",
    "year": "1992–1999",
    "body": "Coupe",
    "hp": 286,
    "topSpeed": 250,
    "accel": "5.5 s",
    "drive": "RWD",
    "trans": "5‑MT",
    "price": "$45,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/BMW_M3_%28E36%29_sedan.jpg",
    "colors": [
      {
        "name": "Estoril Blue",
        "hex": "#2E5FA3"
      },
      {
        "name": "Dakar Yellow",
        "hex": "#FFDE59"
      },
      {
        "name": "Hellrot Red",
        "hex": "#D1001F"
      }
    ]
  },
  {
    "name": "BMW E46 M3",
    "year": "2000–2006",
    "body": "Coupe",
    "hp": 333,
    "topSpeed": 250,
    "accel": "5.1 s",
    "drive": "RWD",
    "trans": "6‑MT/SMG",
    "price": "$48,900",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/BMW_M3_E46_Coupe.JPG",
    "colors": [
      {
        "name": "Laguna Seca Blue",
        "hex": "#5BA7C8"
      },
      {
        "name": "Imola Red",
        "hex": "#9B0B13"
      },
      {
        "name": "Titanium Silver",
        "hex": "#C7C7C7"
      }
    ]
  },
  {
    "name": "BMW E92 M3",
    "year": "2007–2013",
    "body": "Coupe",
    "hp": 414,
    "topSpeed": 250,
    "accel": "4.6 s",
    "drive": "RWD",
    "trans": "6‑MT/7‑DCT",
    "price": "$58,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/BMW_M3_E92_%28Front%29.JPG",
    "colors": [
      {
        "name": "Jerez Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Space Grey",
        "hex": "#8A8F97"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW G80 M3",
    "year": "2021–Present",
    "body": "Sedan",
    "hp": 473,
    "topSpeed": 290,
    "accel": "4.1 s",
    "drive": "RWD/AWD",
    "trans": "6‑MT/8‑AT",
    "price": "$76,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/2021_BMW_M3_Competition_AWD%2C_front_10.23.21.jpg",
    "colors": [
      {
        "name": "Isle of Man Green",
        "hex": "#125B45"
      },
      {
        "name": "Toronto Red",
        "hex": "#B11218"
      },
      {
        "name": "Brooklyn Grey",
        "hex": "#9AA1A6"
      }
    ]
  },
  {
    "name": "BMW G82 M4",
    "year": "2021–Present",
    "body": "Coupe",
    "hp": 503,
    "topSpeed": 290,
    "accel": "3.9 s",
    "drive": "RWD/AWD",
    "trans": "6‑MT/8‑AT",
    "price": "$78,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/BMW_M4_G82_IMG_4890.jpg",
    "colors": [
      {
        "name": "Sao Paulo Yellow",
        "hex": "#FFD600"
      },
      {
        "name": "Portimao Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      }
    ]
  },
  {
    "name": "BMW F90 M5",
    "year": "2018–2023",
    "body": "Sedan",
    "hp": 600,
    "topSpeed": 305,
    "accel": "3.2 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$104,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/93/2018_BMW_M5_Final_Edition_1.jpg",
    "colors": [
      {
        "name": "Marina Bay Blue",
        "hex": "#1E4E79"
      },
      {
        "name": "Donington Grey",
        "hex": "#979DA6"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW G90 M5",
    "year": "2024–Present",
    "body": "Sedan (PHEV)",
    "hp": 717,
    "topSpeed": 250,
    "accel": "3.4 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$120,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/BMW_M5_G90_IAA_2023_1X7A0975.jpg",
    "colors": [
      {
        "name": "Frozen Deep Grey",
        "hex": "#6C6F73"
      },
      {
        "name": "M Brooklyn Grey",
        "hex": "#9AA1A6"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW M2 (G87)",
    "year": "2023–Present",
    "body": "Coupe",
    "hp": 453,
    "topSpeed": 285,
    "accel": "4.1 s",
    "drive": "RWD",
    "trans": "6‑MT/8‑AT",
    "price": "$63,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/BMW_M2_G87_IMG_8309.jpg",
    "colors": [
      {
        "name": "Zandvoort Blue",
        "hex": "#8EC5E6"
      },
      {
        "name": "Toronto Red",
        "hex": "#B11218"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW M8 (F92)",
    "year": "2019–Present",
    "body": "Coupe",
    "hp": 617,
    "topSpeed": 305,
    "accel": "3.0 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$134,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ce/BMW_M8_Coupe_IMG_3433.jpg",
    "colors": [
      {
        "name": "Frozen Bluestone",
        "hex": "#8B929B"
      },
      {
        "name": "Brands Hatch Grey",
        "hex": "#6E7074"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW Z3",
    "year": "1995–2002",
    "body": "Roadster",
    "hp": 170,
    "topSpeed": 220,
    "accel": "7.1 s",
    "drive": "RWD",
    "trans": "5‑MT",
    "price": "$28,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/BMW_Z3_front_20080331.jpg",
    "colors": [
      {
        "name": "Topaz Blue",
        "hex": "#2C6FA3"
      },
      {
        "name": "Boston Green",
        "hex": "#1F4933"
      },
      {
        "name": "Arctic Silver",
        "hex": "#C0C6C9"
      }
    ]
  },
  {
    "name": "BMW Z4 (G29)",
    "year": "2018–Present",
    "body": "Roadster",
    "hp": 382,
    "topSpeed": 250,
    "accel": "3.9 s",
    "drive": "RWD",
    "trans": "8‑AT",
    "price": "$55,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/2020_BMW_Z4_M40i_Front.jpg",
    "colors": [
      {
        "name": "Sanremo Green",
        "hex": "#1C3F32"
      },
      {
        "name": "Misano Blue",
        "hex": "#0A6FB3"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW Z8",
    "year": "1999–2003",
    "body": "Roadster",
    "hp": 394,
    "topSpeed": 250,
    "accel": "4.7 s",
    "drive": "RWD",
    "trans": "6‑MT",
    "price": "$128,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/33/BMW_Z8_front_20080331.jpg",
    "colors": [
      {
        "name": "Titanium Silver",
        "hex": "#C7C7C7"
      },
      {
        "name": "Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Bright Red",
        "hex": "#C60021"
      }
    ]
  },
  {
    "name": "BMW i3",
    "year": "2013–2022",
    "body": "Electric Hatch",
    "hp": 170,
    "topSpeed": 150,
    "accel": "7.2 s",
    "drive": "RWD",
    "trans": "Single‑speed",
    "price": "$44,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/2018_BMW_i3_facelift_IMG_2553.jpg",
    "colors": [
      {
        "name": "Capparis White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Fluid Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Melbourne Red",
        "hex": "#A50E14"
      }
    ]
  },
  {
    "name": "BMW i4 (G26)",
    "year": "2021–Present",
    "body": "Electric Gran Coupe",
    "hp": 536,
    "topSpeed": 225,
    "accel": "3.7 s (M50)",
    "drive": "AWD/RWD",
    "trans": "Single‑speed",
    "price": "$53,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/2022_BMW_i4_M50_IMG_4904.jpg",
    "colors": [
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      },
      {
        "name": "San Remo Green",
        "hex": "#1C3F32"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW i5 (G60)",
    "year": "2023–Present",
    "body": "Electric Sedan",
    "hp": 593,
    "topSpeed": 230,
    "accel": "3.8 s (M60)",
    "drive": "AWD/RWD",
    "trans": "Single‑speed",
    "price": "$67,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/BMW_i5_M60_eDrive_2023.jpg",
    "colors": [
      {
        "name": "Frozen Pure Grey",
        "hex": "#A9B1B7"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW i7 (G70)",
    "year": "2022–Present",
    "body": "Electric Luxury Sedan",
    "hp": 650,
    "topSpeed": 240,
    "accel": "3.5 s (M70)",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$108,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/BMW_i7_xDrive60_IMG_7439.jpg",
    "colors": [
      {
        "name": "Oxide Grey",
        "hex": "#898E91"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW i8",
    "year": "2014–2020",
    "body": "Plug‑in Hybrid Sports",
    "hp": 369,
    "topSpeed": 250,
    "accel": "4.4 s",
    "drive": "AWD",
    "trans": "6‑AT",
    "price": "$147,500",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/BMW_i8_IAA_2017_IMG_0582.jpg",
    "colors": [
      {
        "name": "Protonic Blue",
        "hex": "#2378C3"
      },
      {
        "name": "Crystal White",
        "hex": "#F2F2F2"
      },
      {
        "name": "Sophisto Grey",
        "hex": "#6E7074"
      }
    ]
  },
  {
    "name": "BMW X1 (U11)",
    "year": "2022–Present",
    "body": "Compact SUV",
    "hp": 241,
    "topSpeed": 233,
    "accel": "6.2 s",
    "drive": "AWD/FWD",
    "trans": "7‑DCT/AT",
    "price": "$40,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/2023_BMW_X1_xDrive23d_1X7A7742.jpg",
    "colors": [
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW X2 (U10)",
    "year": "2023–Present",
    "body": "Compact SUV‑Coupe",
    "hp": 312,
    "topSpeed": 250,
    "accel": "5.4 s (M35i)",
    "drive": "AWD",
    "trans": "7‑DCT",
    "price": "$42,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/BMW_X2_(U10)_IMG_6554.jpg",
    "colors": [
      {
        "name": "Fire Red",
        "hex": "#B11218"
      },
      {
        "name": "San Remo Green",
        "hex": "#1C3F32"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW X3 (G45)",
    "year": "2024–Present",
    "body": "Midsize SUV",
    "hp": 255,
    "topSpeed": 240,
    "accel": "6.0 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$51,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/BMW_G45_IMG_5105.jpg",
    "colors": [
      {
        "name": "Brooklyn Grey",
        "hex": "#9AA1A6"
      },
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW X4 (G02)",
    "year": "2018–2024",
    "body": "SUV‑Coupe",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.4 s (M40i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$55,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/BMW_X4_xDrive35d_M_Sportpaket_%28G02%29_%E2%80%93_Frontansicht%2C_14._April_2018%2C_D%C3%BCsseldorf.jpg",
    "colors": [
      {
        "name": "Flamenco Red",
        "hex": "#7C0A02"
      },
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW X5 (G05)",
    "year": "2018–Present",
    "body": "Luxury SUV",
    "hp": 523,
    "topSpeed": 250,
    "accel": "4.1 s (M60i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$66,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/2019_BMW_X5_xDrive40i_Automatic_3.0_Front.jpg",
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Marina Bay Blue",
        "hex": "#1E4E79"
      }
    ]
  },
  {
    "name": "BMW X6 (G06)",
    "year": "2019–Present",
    "body": "SUV‑Coupe",
    "hp": 523,
    "topSpeed": 250,
    "accel": "4.2 s (M60i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$71,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/2020_BMW_X6_xDrive30d_M_Sport_Pro_Automatic_3.0_Front.jpg",
    "colors": [
      {
        "name": "Manhattan Green",
        "hex": "#586B5B"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW X7 (G07)",
    "year": "2018–Present",
    "body": "Full‑size SUV",
    "hp": 523,
    "topSpeed": 250,
    "accel": "4.6 s (M60i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$82,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/2019_BMW_X7_xDrive30d_Automatic_3.0_Front.jpg",
    "colors": [
      {
        "name": "Dravit Grey",
        "hex": "#6C6F73"
      },
      {
        "name": "Tanzanite Blue",
        "hex": "#0C3C78"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW XM",
    "year": "2023–Present",
    "body": "High‑Performance SUV (PHEV)",
    "hp": 644,
    "topSpeed": 270,
    "accel": "4.1 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$159,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/BMW_XM_IMG_0111.jpg",
    "colors": [
      {
        "name": "Cape York Green",
        "hex": "#2D3E37"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW iX",
    "year": "2021–Present",
    "body": "Electric SUV",
    "hp": 516,
    "topSpeed": 246,
    "accel": "4.4 s (xDrive50)",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$85,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/2022_BMW_iX_xDrive50_Front.jpg",
    "colors": [
      {
        "name": "Storm Bay",
        "hex": "#8C97A6"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      }
    ]
  },
  {
    "name": "BMW iX3",
    "year": "2020–Present",
    "body": "Electric SUV",
    "hp": 286,
    "topSpeed": 180,
    "accel": "6.8 s",
    "drive": "RWD",
    "trans": "Single‑speed",
    "price": "$55,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/BMW_iX3_IAA_2021_1X7A0053.jpg",
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Sophisto Grey",
        "hex": "#6E7074"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 1 Series (F40)",
    "year": "2019–Present",
    "body": "Hatchback",
    "hp": 302,
    "topSpeed": 250,
    "accel": "4.8 s (M135i)",
    "drive": "AWD/FWD",
    "trans": "8‑AT",
    "price": "$36,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/BMW_1er_F40_IMG_3652.jpg",
    "colors": [
      {
        "name": "Misano Blue",
        "hex": "#0A6FB3"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 2 Series Gran Coupe (F44)",
    "year": "2019–Present",
    "body": "Gran Coupe",
    "hp": 302,
    "topSpeed": 250,
    "accel": "4.8 s (M235i)",
    "drive": "AWD/FWD",
    "trans": "8‑AT",
    "price": "$38,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/BMW_2er_Gran_Coup%C3%A9_F44_IMG_2973.jpg",
    "colors": [
      {
        "name": "Snapper Rocks Blue",
        "hex": "#2E8BC0"
      },
      {
        "name": "Storm Bay",
        "hex": "#8C97A6"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 2 Series Coupe (G42)",
    "year": "2021–Present",
    "body": "Coupe",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.1 s (M240i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$49,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/2022_BMW_2_Series_M240i_xDrive_Coupe_3.0_Front.jpg",
    "colors": [
      {
        "name": "Thundernight Purple",
        "hex": "#3E2A4D"
      },
      {
        "name": "Portimao Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 3 Series (G20)",
    "year": "2018–Present",
    "body": "Sedan",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.4 s (M340i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$44,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/2019_BMW_330i_M_Sport_Automatic_2.0_Front.jpg",
    "colors": [
      {
        "name": "Melbourne Red",
        "hex": "#A50E14"
      },
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 3 Series Touring (G21)",
    "year": "2019–Present",
    "body": "Wagon",
    "hp": 374,
    "topSpeed": 250,
    "accel": "4.5 s (M340i)",
    "drive": "AWD/RWD",
    "trans": "8‑AT",
    "price": "$46,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/BMW_G21_IMG_2926.jpg",
    "colors": [
      {
        "name": "Sunset Orange",
        "hex": "#D45B29"
      },
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Mineral Grey",
        "hex": "#6F757B"
      }
    ]
  },
  {
    "name": "BMW 4 Series Coupe (G22)",
    "year": "2020–Present",
    "body": "Coupe",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.6 s (M440i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$49,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/BMW_G22_IMG_4105.jpg",
    "colors": [
      {
        "name": "Arctic Race Blue",
        "hex": "#1D4E89"
      },
      {
        "name": "Brooklyn Grey",
        "hex": "#9AA1A6"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 4 Series Gran Coupe (G26)",
    "year": "2021–Present",
    "body": "Gran Coupe",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.7 s (M440i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$47,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/BMW_G26_IMG_5109.jpg",
    "colors": [
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Portimao Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      }
    ]
  },
  {
    "name": "BMW 5 Series (G60)",
    "year": "2023–Present",
    "body": "Sedan",
    "hp": 375,
    "topSpeed": 250,
    "accel": "5.8 s (540i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$57,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/BMW_G60_IMG_0407.jpg",
    "colors": [
      {
        "name": "Oxide Grey",
        "hex": "#898E91"
      },
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 5 Series Touring (G61)",
    "year": "2024–Present",
    "body": "Wagon",
    "hp": 389,
    "topSpeed": 250,
    "accel": "5.4 s (540i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$60,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/BMW_G61_IMG_8811.jpg",
    "colors": [
      {
        "name": "Brooklyn Grey",
        "hex": "#9AA1A6"
      },
      {
        "name": "Blue Ridge Mountain",
        "hex": "#2B4B6F"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 6 Series GT (G32)",
    "year": "2017–2023",
    "body": "Gran Turismo",
    "hp": 335,
    "topSpeed": 250,
    "accel": "5.4 s (640i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$70,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/2018_BMW_6-Series_640i_xDrive_Gran_Turismo%2C_front_1.21.18.jpg",
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mediterranean Blue",
        "hex": "#144E7A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 7 Series (G70)",
    "year": "2022–Present",
    "body": "Luxury Sedan",
    "hp": 536,
    "topSpeed": 250,
    "accel": "4.5 s (760i)",
    "drive": "AWD/RWD",
    "trans": "8‑AT",
    "price": "$90,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/BMW_G70_1X7A7370.jpg",
    "colors": [
      {
        "name": "Dravit Grey",
        "hex": "#6C6F73"
      },
      {
        "name": "Tanzanite Blue",
        "hex": "#0C3C78"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 8 Series Coupe (G15)",
    "year": "2018–Present",
    "body": "Grand Tourer",
    "hp": 523,
    "topSpeed": 250,
    "accel": "3.7 s (M850i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$91,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/BMW_850i_xDrive_Coupe_%28G15%29.JPG",
    "colors": [
      {
        "name": "Barcelona Blue",
        "hex": "#29689E"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 8 Series Gran Coupe (G16)",
    "year": "2019–Present",
    "body": "Gran Coupe",
    "hp": 523,
    "topSpeed": 250,
    "accel": "3.8 s (M850i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$93,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/BMW_8er_Gran_Coup%C3%A9_G16_IMG_5549.jpg",
    "colors": [
      {
        "name": "Frozen Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Sonic Speed Blue",
        "hex": "#1F5C94"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW E28 M5",
    "year": "1984–1988",
    "body": "Sedan",
    "hp": 286,
    "topSpeed": 245,
    "accel": "6.5 s",
    "drive": "RWD",
    "trans": "5‑MT",
    "price": "$44,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/BMW_M5_%28E28%29_front_20080201.jpg",
    "colors": [
      {
        "name": "Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Cinnabar Red",
        "hex": "#B90F1A"
      }
    ]
  },
  {
    "name": "BMW E34 M5",
    "year": "1988–1995",
    "body": "Sedan",
    "hp": 311,
    "topSpeed": 250,
    "accel": "6.3 s",
    "drive": "RWD",
    "trans": "5‑MT/6‑MT",
    "price": "$58,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_M5_E34_front_20071115.jpg",
    "colors": [
      {
        "name": "Avus Blue",
        "hex": "#1C4E8C"
      },
      {
        "name": "Calypso Red",
        "hex": "#7D0C18"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW E39 M5",
    "year": "1998–2003",
    "body": "Sedan",
    "hp": 394,
    "topSpeed": 250,
    "accel": "4.8 s",
    "drive": "RWD",
    "trans": "6‑MT",
    "price": "$72,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/BMW_M5_%28E39%29_front_20080731.jpg",
    "colors": [
      {
        "name": "Le Mans Blue",
        "hex": "#1C3E73"
      },
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Titanium Silver",
        "hex": "#C7C7C7"
      }
    ]
  },
  {
    "name": "BMW E60 M5",
    "year": "2005–2010",
    "body": "Sedan",
    "hp": 500,
    "topSpeed": 250,
    "accel": "4.7 s",
    "drive": "RWD",
    "trans": "7‑SMG/6‑MT",
    "price": "$86,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/62/BMW_M5_%28E60%29_front_20080131.jpg",
    "colors": [
      {
        "name": "Interlagos Blue",
        "hex": "#1E3973"
      },
      {
        "name": "Silverstone II",
        "hex": "#C6CDD2"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW F10 M5",
    "year": "2011–2016",
    "body": "Sedan",
    "hp": 560,
    "topSpeed": 250,
    "accel": "4.3 s",
    "drive": "RWD",
    "trans": "7‑DCT",
    "price": "$92,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/2012_BMW_M5_%28F10%29_front_20120115.jpg",
    "colors": [
      {
        "name": "Monte Carlo Blue",
        "hex": "#123E77"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Singapore Grey",
        "hex": "#6E7074"
      }
    ]
  },
  {
    "name": "BMW 3200 CS",
    "year": "1962–1965",
    "body": "Coupe",
    "hp": 160,
    "topSpeed": 200,
    "accel": "—",
    "drive": "RWD",
    "trans": "4‑MT",
    "price": "$7,500",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/BMW_3200_CS_front_20090606.jpg",
    "colors": [
      {
        "name": "Silver",
        "hex": "#C0C0C0"
      },
      {
        "name": "Blue",
        "hex": "#1D4E89"
      },
      {
        "name": "White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 507",
    "year": "1956–1959",
    "body": "Roadster",
    "hp": 150,
    "topSpeed": 200,
    "accel": "—",
    "drive": "RWD",
    "trans": "4‑MT",
    "price": "$9,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/BMW_507_front_20080331.jpg",
    "colors": [
      {
        "name": "Silver",
        "hex": "#C0C0C0"
      },
      {
        "name": "Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Red",
        "hex": "#C60021"
      }
    ]
  },
  {
    "name": "BMW 850CSi (E31)",
    "year": "1992–1996",
    "body": "GT Coupe",
    "hp": 375,
    "topSpeed": 250,
    "accel": "5.7 s",
    "drive": "RWD",
    "trans": "6‑MT",
    "price": "$100,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/BMW_850CSi_front_20080426.jpg",
    "colors": [
      {
        "name": "Avus Blue",
        "hex": "#1C4E8C"
      },
      {
        "name": "Calypso Red",
        "hex": "#7D0C18"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 635 CSi (E24)",
    "year": "1978–1989",
    "body": "Coupe",
    "hp": 215,
    "topSpeed": 222,
    "accel": "7.4 s",
    "drive": "RWD",
    "trans": "5‑MT/4‑AT",
    "price": "$45,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/BMW_635_CSi_front_20080331.jpg",
    "colors": [
      {
        "name": "Polaris Silver",
        "hex": "#C0C0C0"
      },
      {
        "name": "Bahama Beige",
        "hex": "#C9A66B"
      },
      {
        "name": "Black",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 7 Series (E38)",
    "year": "1994–2001",
    "body": "Luxury Sedan",
    "hp": 322,
    "topSpeed": 250,
    "accel": "6.6 s (750i)",
    "drive": "RWD",
    "trans": "5‑AT",
    "price": "$68,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/BMW_7er_%28E38%29_front_20080202.jpg",
    "colors": [
      {
        "name": "Oxford Green",
        "hex": "#324B3A"
      },
      {
        "name": "Anthracite",
        "hex": "#3C3C3C"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 5 Series (E39)",
    "year": "1995–2004",
    "body": "Sedan",
    "hp": 282,
    "topSpeed": 250,
    "accel": "6.2 s (540i)",
    "drive": "RWD",
    "trans": "6‑MT/5‑AT",
    "price": "$50,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/BMW_5er_E39_front_20080331.jpg",
    "colors": [
      {
        "name": "Oxford Green",
        "hex": "#324B3A"
      },
      {
        "name": "Titanium Silver",
        "hex": "#C7C7C7"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 3 Series (E46)",
    "year": "1998–2006",
    "body": "Sedan",
    "hp": 225,
    "topSpeed": 240,
    "accel": "6.9 s (330i)",
    "drive": "RWD",
    "trans": "5‑MT/5‑AT",
    "price": "$35,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/BMW_3er_E46_front_20080331.jpg",
    "colors": [
      {
        "name": "Topaz Blue",
        "hex": "#2C6FA3"
      },
      {
        "name": "Silver Grey",
        "hex": "#A7A9AC"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 3 Series (E90)",
    "year": "2005–2013",
    "body": "Sedan",
    "hp": 300,
    "topSpeed": 250,
    "accel": "5.3 s (335i)",
    "drive": "RWD/AWD",
    "trans": "6‑MT/6‑AT",
    "price": "$37,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/2009_BMW_328i_sedan_--_NHTSA.jpg",
    "colors": [
      {
        "name": "Le Mans Blue",
        "hex": "#1C3E73"
      },
      {
        "name": "Space Grey",
        "hex": "#8A8F97"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 4 Series (F32)",
    "year": "2013–2020",
    "body": "Coupe",
    "hp": 300,
    "topSpeed": 250,
    "accel": "5.5 s (435i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT/6‑MT",
    "price": "$46,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/BMW_435i_F32.jpg",
    "colors": [
      {
        "name": "Estoril Blue",
        "hex": "#2E5FA3"
      },
      {
        "name": "Mineral Grey",
        "hex": "#6F757B"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 6 Series (F12)",
    "year": "2011–2018",
    "body": "Convertible",
    "hp": 445,
    "topSpeed": 250,
    "accel": "4.6 s (650i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$97,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6f/BMW_6er_Cabriolet_F12_front_20110319.jpg",
    "colors": [
      {
        "name": "Space Grey",
        "hex": "#8A8F97"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW M4 (F82)",
    "year": "2014–2020",
    "body": "Coupe",
    "hp": 425,
    "topSpeed": 250,
    "accel": "4.1 s",
    "drive": "RWD",
    "trans": "7‑DCT/6‑MT",
    "price": "$69,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/2015_BMW_M4_%28F82%29_coup%C3%A9_%2818419449260%29.jpg",
    "colors": [
      {
        "name": "Austin Yellow",
        "hex": "#CDB547"
      },
      {
        "name": "Yas Marina Blue",
        "hex": "#71A7D3"
      },
      {
        "name": "Sakhir Orange",
        "hex": "#C6512B"
      }
    ]
  },
  {
    "name": "BMW 1M Coupe (E82)",
    "year": "2011",
    "body": "Coupe",
    "hp": 335,
    "topSpeed": 250,
    "accel": "4.7 s",
    "drive": "RWD",
    "trans": "6‑MT",
    "price": "$47,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/BMW_1M_Coupe_-_Flickr_-_The_Car_Spy_%282%29.jpg",
    "colors": [
      {
        "name": "Valencia Orange",
        "hex": "#D8692A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW M6 (F13)",
    "year": "2012–2018",
    "body": "Coupe",
    "hp": 560,
    "topSpeed": 250,
    "accel": "4.1 s",
    "drive": "RWD",
    "trans": "7‑DCT",
    "price": "$113,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/2013_BMW_M6_coup%C3%A9_%28F13%29_--_2012_Alternative_Fuel_Vehicle_Expo_--_NHTSA.jpg",
    "colors": [
      {
        "name": "San Marino Blue",
        "hex": "#1F4F8E"
      },
      {
        "name": "Sakhir Orange",
        "hex": "#C6512B"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW Alpina B7 (G12)",
    "year": "2016–2022",
    "body": "Luxury Sedan",
    "hp": 600,
    "topSpeed": 310,
    "accel": "3.5 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$143,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/BMW_Alpina_B7_G12_IMG_2513.jpg",
    "colors": [
      {
        "name": "Alpina Blue",
        "hex": "#103B73"
      },
      {
        "name": "Alpina Green",
        "hex": "#0C3F32"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW X5 M (F95)",
    "year": "2020–Present",
    "body": "Performance SUV",
    "hp": 617,
    "topSpeed": 290,
    "accel": "3.8 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$122,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/BMW_X5_M_Competition_%28F95%29_IMG_4370.jpg",
    "colors": [
      {
        "name": "Marina Bay Blue",
        "hex": "#1E4E79"
      },
      {
        "name": "Donington Grey",
        "hex": "#979DA6"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW X6 M (F96)",
    "year": "2020–Present",
    "body": "Performance SUV",
    "hp": 617,
    "topSpeed": 290,
    "accel": "3.8 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$127,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/BMW_X6_M_Competition_%28F96%29_IMG_4388.jpg",
    "colors": [
      {
        "name": "Brands Hatch Grey",
        "hex": "#6E7074"
      },
      {
        "name": "Marina Bay Blue",
        "hex": "#1E4E79"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW X3 M (F97)",
    "year": "2019–2024",
    "body": "Performance SUV",
    "hp": 503,
    "topSpeed": 285,
    "accel": "3.9 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$73,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/BMW_X3_M_Competition_%28F97%29_IMG_3521.jpg",
    "colors": [
      {
        "name": "Toronto Red",
        "hex": "#B11218"
      },
      {
        "name": "Donington Grey",
        "hex": "#979DA6"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW X4 M (F98)",
    "year": "2019–2024",
    "body": "Performance SUV",
    "hp": 503,
    "topSpeed": 285,
    "accel": "3.9 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$74,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/BMW_X4_M_Competition_%28F98%29_IMG_9672.jpg",
    "colors": [
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW iX1 (U11)",
    "year": "2022–Present",
    "body": "Electric SUV",
    "hp": 313,
    "topSpeed": 180,
    "accel": "5.6 s (xDrive30)",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$47,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/BMW_iX1_(U11)_xDrive30_IMG_6901.jpg",
    "colors": [
      {
        "name": "Blue Bay Lagoon",
        "hex": "#4BA3C3"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW iX2 (U10)",
    "year": "2023–Present",
    "body": "Electric SUV‑Coupe",
    "hp": 313,
    "topSpeed": 180,
    "accel": "5.6 s",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$51,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/BMW_iX2_IMG_2140.jpg",
    "colors": [
      {
        "name": "Fire Red",
        "hex": "#B11218"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 4 Series Convertible (G23)",
    "year": "2020–Present",
    "body": "Convertible",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.7 s (M440i)",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$59,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/BMW_G23_IMG_4974.jpg",
    "colors": [
      {
        "name": "Sunset Orange",
        "hex": "#D45B29"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 8 Series Convertible (G14)",
    "year": "2018–Present",
    "body": "Convertible",
    "hp": 523,
    "topSpeed": 250,
    "accel": "3.9 s (M850i)",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$100,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/BMW_8er_Cabriolet_G14_IMG_2021.jpg",
    "colors": [
      {
        "name": "Sonic Speed Blue",
        "hex": "#1F5C94"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 2 Series Active Tourer (U06)",
    "year": "2021–Present",
    "body": "MPV",
    "hp": 215,
    "topSpeed": 220,
    "accel": "7.0 s (223i)",
    "drive": "FWD/AWD",
    "trans": "7‑DCT",
    "price": "$36,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/BMW_2er_Active_Tourer_(U06)_IMG_1133.jpg",
    "colors": [
      {
        "name": "Phytonic Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      }
    ]
  },
  {
    "name": "BMW i7 M70",
    "year": "2023–Present",
    "body": "Electric Luxury Sedan",
    "hp": 650,
    "topSpeed": 250,
    "accel": "3.5 s",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$168,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/BMW_i7_M70_IMG_1338.jpg",
    "colors": [
      {
        "name": "Frozen Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Oxide Grey",
        "hex": "#898E91"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW M3 Touring (G81)",
    "year": "2022–Present",
    "body": "Performance Wagon",
    "hp": 503,
    "topSpeed": 280,
    "accel": "3.6 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$110,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/BMW_M3_Touring_G81_IAA_2023_1X7A1032.jpg",
    "colors": [
      {
        "name": "Isle of Man Green",
        "hex": "#125B45"
      },
      {
        "name": "Aventurin Red",
        "hex": "#6B0D10"
      },
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      }
    ]
  },
  {
    "name": "BMW 330e (G20 PHEV)",
    "year": "2019–Present",
    "body": "Plug‑in Hybrid Sedan",
    "hp": 288,
    "topSpeed": 230,
    "accel": "5.7 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$45,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/BMW_330e_iPerformance_MS_%28G20%29_%E2%80%93_f_07092020.jpg",
    "colors": [
      {
        "name": "Mediterranean Blue",
        "hex": "#144E7A"
      },
      {
        "name": "Mineral Grey",
        "hex": "#6F757B"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 745e (G11 PHEV)",
    "year": "2019–2022",
    "body": "Plug‑in Hybrid Sedan",
    "hp": 389,
    "topSpeed": 250,
    "accel": "5.1 s",
    "drive": "AWD/RWD",
    "trans": "8‑AT",
    "price": "$96,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/BMW_745e_iPerformance_M_Sport_%28G11%29_%E2%80%93_f_07092020.jpg",
    "colors": [
      {
        "name": "Bernina Grey",
        "hex": "#7D7F86"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW M440i xDrive Gran Coupe",
    "year": "2021–Present",
    "body": "Gran Coupe",
    "hp": 382,
    "topSpeed": 250,
    "accel": "4.4 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$58,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/BMW_M440i_xDrive_Gran_Coup%C3%A9_G26_IMG_5119.jpg",
    "colors": [
      {
        "name": "Brooklyn Grey",
        "hex": "#9AA1A6"
      },
      {
        "name": "Tanzanite Blue",
        "hex": "#0C3C78"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW i4 M50",
    "year": "2021–Present",
    "body": "Electric Gran Coupe",
    "hp": 536,
    "topSpeed": 225,
    "accel": "3.7 s",
    "drive": "AWD",
    "trans": "Single‑speed",
    "price": "$67,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/2022_BMW_i4_M50_IMG_4904.jpg",
    "colors": [
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 528i (E39)",
    "year": "1995–2000",
    "body": "Sedan",
    "hp": 193,
    "topSpeed": 230,
    "accel": "8.2 s",
    "drive": "RWD",
    "trans": "5‑AT/5‑MT",
    "price": "$45,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/BMW_5er_E39_front_20080331.jpg",
    "colors": [
      {
        "name": "Oxford Green",
        "hex": "#324B3A"
      },
      {
        "name": "Titanium Silver",
        "hex": "#C7C7C7"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 540i (G30)",
    "year": "2017–2023",
    "body": "Sedan",
    "hp": 335,
    "topSpeed": 250,
    "accel": "4.9 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$60,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/BMW_G30_IMG_0159.jpg",
    "colors": [
      {
        "name": "Bluestone",
        "hex": "#8B929B"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 118i (F40)",
    "year": "2019–Present",
    "body": "Hatchback",
    "hp": 138,
    "topSpeed": 210,
    "accel": "8.5 s",
    "drive": "FWD",
    "trans": "7‑DCT",
    "price": "$29,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/BMW_1er_F40_IMG_3652.jpg",
    "colors": [
      {
        "name": "Skyscraper Grey",
        "hex": "#A9B1B7"
      },
      {
        "name": "Misano Blue",
        "hex": "#0A6FB3"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 225xe Active Tourer",
    "year": "2016–2021",
    "body": "PHEV MPV",
    "hp": 221,
    "topSpeed": 202,
    "accel": "6.7 s",
    "drive": "AWD",
    "trans": "6‑AT",
    "price": "$41,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/BMW_225xe_iPerformance_Active_Tourer.jpg",
    "colors": [
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Estoril Blue",
        "hex": "#2E5FA3"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 730d (G11)",
    "year": "2015–2022",
    "body": "Luxury Sedan",
    "hp": 261,
    "topSpeed": 250,
    "accel": "6.1 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$92,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/BMW_7er_%28G11%29_730d_xDrive_%E2%80%93_Frontansicht%2C_14._M%C3%A4rz_2016%2C_D%C3%BCsseldorf.jpg",
    "colors": [
      {
        "name": "Sophisto Grey",
        "hex": "#6E7074"
      },
      {
        "name": "Imperial Blue",
        "hex": "#1C375C"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW M550i (G30)",
    "year": "2017–2023",
    "body": "Sedan",
    "hp": 523,
    "topSpeed": 250,
    "accel": "3.6 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$76,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/BMW_M550i_xDrive_%28G30%29%2C_IAA_2017%2C_Frankfurt_%281Y7A2171%29.jpg",
    "colors": [
      {
        "name": "Carbon Black",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mediterranean Blue",
        "hex": "#144E7A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 330i (G20)",
    "year": "2018–Present",
    "body": "Sedan",
    "hp": 255,
    "topSpeed": 250,
    "accel": "5.6 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$42,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/2019_BMW_330i_M_Sport_Automatic_2.0_Front.jpg",
    "colors": [
      {
        "name": "Portimao Blue",
        "hex": "#0F4C81"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      }
    ]
  },
  {
    "name": "BMW 740i (G70)",
    "year": "2022–Present",
    "body": "Luxury Sedan",
    "hp": 375,
    "topSpeed": 250,
    "accel": "5.0 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$96,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/BMW_G70_1X7A7370.jpg",
    "colors": [
      {
        "name": "Oxide Grey",
        "hex": "#898E91"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW X7 xDrive40i",
    "year": "2018–Present",
    "body": "Full‑size SUV",
    "hp": 375,
    "topSpeed": 250,
    "accel": "5.8 s",
    "drive": "AWD",
    "trans": "8‑AT",
    "price": "$82,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/2019_BMW_X7_xDrive30d_Automatic_3.0_Front.jpg",
    "colors": [
      {
        "name": "Dravit Grey",
        "hex": "#6C6F73"
      },
      {
        "name": "Tanzanite Blue",
        "hex": "#0C3C78"
      },
      {
        "name": "Mineral White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 218i Gran Coupe (F44)",
    "year": "2019–Present",
    "body": "Gran Coupe",
    "hp": 138,
    "topSpeed": 213,
    "accel": "8.7 s",
    "drive": "FWD",
    "trans": "7‑DCT",
    "price": "$31,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/BMW_2er_Gran_Coup%C3%A9_F44_IMG_2973.jpg",
    "colors": [
      {
        "name": "Storm Bay",
        "hex": "#8C97A6"
      },
      {
        "name": "Snapper Rocks Blue",
        "hex": "#2E8BC0"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  },
  {
    "name": "BMW 420i Coupe (G22)",
    "year": "2020–Present",
    "body": "Coupe",
    "hp": 184,
    "topSpeed": 240,
    "accel": "7.5 s",
    "drive": "RWD/AWD",
    "trans": "8‑AT",
    "price": "$46,000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/BMW_G22_IMG_4105.jpg",
    "colors": [
      {
        "name": "Arctic Race Blue",
        "hex": "#1D4E89"
      },
      {
        "name": "Black Sapphire",
        "hex": "#0A0A0A"
      },
      {
        "name": "Alpine White",
        "hex": "#F5F5F5"
      }
    ]
  }
];