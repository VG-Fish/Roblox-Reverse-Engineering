!(function () {
  var r = {
      470: function (r, e, t) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (r, e, t, n) {
                  void 0 === n && (n = t),
                    Object.defineProperty(r, n, {
                      enumerable: !0,
                      get: function () {
                        return e[t];
                      },
                    });
                }
              : function (r, e, t, n) {
                  void 0 === n && (n = t), (r[n] = e[t]);
                }),
          i =
            (this && this.__exportStar) ||
            function (r, e) {
              for (var t in r)
                "default" === t ||
                  Object.prototype.hasOwnProperty.call(e, t) ||
                  n(e, r, t);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(t(179), e),
          i(t(489), e),
          i(t(664), e),
          i(t(928), e);
      },
      179: function (r, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FoundationDark = void 0),
          (e.FoundationDark = {
            Color: {
              Extended: {
                Black: {
                  Black_0: "rgba(0, 0, 0, 0)",
                  Black_03: "rgba(0, 0, 0, 0.03)",
                  Black_05: "rgba(0, 0, 0, 0.05)",
                  Black_10: "rgba(0, 0, 0, 0.1)",
                  Black_15: "rgba(0, 0, 0, 0.15)",
                  Black_20: "rgba(0, 0, 0, 0.2)",
                  Black_30: "rgba(0, 0, 0, 0.3)",
                  Black_40: "rgba(0, 0, 0, 0.4)",
                  Black_50: "rgba(0, 0, 0, 0.5)",
                  Black_60: "rgba(0, 0, 0, 0.6)",
                  Black_70: "rgba(0, 0, 0, 0.7)",
                  Black_80: "rgba(0, 0, 0, 0.8)",
                  Black_85: "rgba(0, 0, 0, 0.85)",
                  Black_90: "rgba(0, 0, 0, 0.9)",
                  Black_95: "rgba(0, 0, 0, 0.95)",
                  Black_97: "rgba(0, 0, 0, 0.97)",
                  Black_100: "rgb(0, 0, 0)",
                },
                White: {
                  White_0: "rgba(255, 255, 255, 0)",
                  White_03: "rgba(255, 255, 255, 0.03)",
                  White_05: "rgba(255, 255, 255, 0.05)",
                  White_10: "rgba(255, 255, 255, 0.1)",
                  White_15: "rgba(255, 255, 255, 0.15)",
                  White_20: "rgba(255, 255, 255, 0.2)",
                  White_30: "rgba(255, 255, 255, 0.3)",
                  White_40: "rgba(255, 255, 255, 0.4)",
                  White_50: "rgba(255, 255, 255, 0.5)",
                  White_60: "rgba(255, 255, 255, 0.6)",
                  White_70: "rgba(255, 255, 255, 0.7)",
                  White_80: "rgba(255, 255, 255, 0.8)",
                  White_85: "rgba(255, 255, 255, 0.85)",
                  White_90: "rgba(255, 255, 255, 0.9)",
                  White_95: "rgba(255, 255, 255, 0.95)",
                  White_97: "rgba(255, 255, 255, 0.97)",
                  White_100: "rgb(255, 255, 255)",
                },
                Red: {
                  Red_100: "rgb(255, 234, 233)",
                  Red_200: "rgb(255, 223, 222)",
                  Red_300: "rgb(247, 205, 203)",
                  Red_400: "rgb(243, 178, 174)",
                  Red_500: "rgb(238, 151, 145)",
                  Red_600: "rgb(235, 121, 115)",
                  Red_700: "rgb(231, 87, 80)",
                  Red_800: "rgb(223, 40, 31)",
                  Red_900: "rgb(197, 18, 10)",
                  Red_1000: "rgb(164, 17, 9)",
                  Red_1100: "rgb(131, 15, 7)",
                  Red_1200: "rgb(100, 12, 5)",
                  Red_1300: "rgb(71, 8, 4)",
                  Red_1400: "rgb(40, 6, 3)",
                },
                Orange: {
                  Orange_100: "rgb(253, 232, 216)",
                  Orange_200: "rgb(252, 222, 199)",
                  Orange_300: "rgb(251, 206, 174)",
                  Orange_400: "rgb(251, 178, 134)",
                  Orange_500: "rgb(250, 148, 90)",
                  Orange_600: "rgb(245, 118, 48)",
                  Orange_700: "rgb(220, 100, 35)",
                  Orange_800: "rgb(192, 80, 20)",
                  Orange_900: "rgb(169, 67, 11)",
                  Orange_1000: "rgb(144, 51, 0)",
                  Orange_1100: "rgb(115, 40, 0)",
                  Orange_1200: "rgb(87, 30, 0)",
                  Orange_1300: "rgb(60, 21, 0)",
                  Orange_1400: "rgb(33, 13, 1)",
                },
                Yellow: {
                  Yellow_100: "rgb(253, 236, 193)",
                  Yellow_200: "rgb(250, 228, 170)",
                  Yellow_300: "rgb(247, 210, 115)",
                  Yellow_400: "rgb(242, 186, 42)",
                  Yellow_500: "rgb(219, 166, 31)",
                  Yellow_600: "rgb(196, 147, 21)",
                  Yellow_700: "rgb(174, 128, 11)",
                  Yellow_800: "rgb(151, 108, 0)",
                  Yellow_900: "rgb(129, 93, 0)",
                  Yellow_1000: "rgb(107, 76, 0)",
                  Yellow_1100: "rgb(83, 61, 2)",
                  Yellow_1200: "rgb(63, 45, 1)",
                  Yellow_1300: "rgb(44, 31, 0)",
                  Yellow_1400: "rgb(24, 17, 0)",
                },
                Green: {
                  Green_100: "rgb(208, 251, 227)",
                  Green_200: "rgb(176, 246, 208)",
                  Green_300: "rgb(142, 233, 182)",
                  Green_400: "rgb(101, 215, 157)",
                  Green_500: "rgb(57, 197, 130)",
                  Green_600: "rgb(29, 177, 106)",
                  Green_700: "rgb(12, 155, 90)",
                  Green_800: "rgb(1, 133, 75)",
                  Green_900: "rgb(2, 114, 64)",
                  Green_1000: "rgb(1, 95, 53)",
                  Green_1100: "rgb(0, 74, 41)",
                  Green_1200: "rgb(1, 56, 31)",
                  Green_1300: "rgb(10, 38, 18)",
                  Green_1400: "rgb(0, 22, 12)",
                },
                Turquoise: {
                  Turquoise_100: "rgb(200, 246, 255)",
                  Turquoise_200: "rgb(163, 239, 254)",
                  Turquoise_300: "rgb(126, 229, 248)",
                  Turquoise_400: "rgb(92, 210, 232)",
                  Turquoise_500: "rgb(57, 189, 216)",
                  Turquoise_600: "rgb(22, 169, 199)",
                  Turquoise_700: "rgb(4, 148, 178)",
                  Turquoise_800: "rgb(18, 125, 152)",
                  Turquoise_900: "rgb(5, 108, 130)",
                  Turquoise_1000: "rgb(5, 90, 106)",
                  Turquoise_1100: "rgb(4, 71, 84)",
                  Turquoise_1200: "rgb(2, 53, 63)",
                  Turquoise_1300: "rgb(2, 37, 44)",
                  Turquoise_1400: "rgb(2, 20, 24)",
                },
                Blue: {
                  Blue_100: "rgb(235, 241, 255)",
                  Blue_200: "rgb(204, 221, 255)",
                  Blue_300: "rgb(173, 201, 255)",
                  Blue_400: "rgb(143, 180, 255)",
                  Blue_500: "rgb(112, 160, 255)",
                  Blue_600: "rgb(82, 139, 255)",
                  Blue_700: "rgb(51, 95, 255)",
                  Blue_800: "rgb(20, 70, 255)",
                  Blue_900: "rgb(0, 53, 245)",
                  Blue_1000: "rgb(0, 45, 214)",
                  Blue_1100: "rgb(0, 39, 184)",
                  Blue_1200: "rgb(0, 34, 153)",
                  Blue_1300: "rgb(0, 27, 122)",
                  Blue_1400: "rgb(0, 20, 92)",
                },
                Purple: {
                  Purple_100: "rgb(241, 231, 255)",
                  Purple_200: "rgb(233, 222, 251)",
                  Purple_300: "rgb(226, 206, 253)",
                  Purple_400: "rgb(212, 181, 252)",
                  Purple_500: "rgb(197, 156, 249)",
                  Purple_600: "rgb(182, 130, 247)",
                  Purple_700: "rgb(167, 102, 245)",
                  Purple_800: "rgb(147, 72, 240)",
                  Purple_900: "rgb(130, 46, 231)",
                  Purple_1000: "rgb(108, 33, 198)",
                  Purple_1100: "rgb(86, 20, 165)",
                  Purple_1200: "rgb(65, 8, 134)",
                  Purple_1300: "rgb(45, 4, 96)",
                  Purple_1400: "rgb(28, 2, 59)",
                },
                Magenta: {
                  Magenta_100: "rgb(253, 232, 249)",
                  Magenta_200: "rgb(253, 221, 253)",
                  Magenta_300: "rgb(245, 200, 252)",
                  Magenta_400: "rgb(239, 170, 250)",
                  Magenta_500: "rgb(232, 139, 248)",
                  Magenta_600: "rgb(223, 106, 247)",
                  Magenta_700: "rgb(213, 64, 245)",
                  Magenta_800: "rgb(192, 10, 232)",
                  Magenta_900: "rgb(165, 14, 200)",
                  Magenta_1000: "rgb(138, 12, 167)",
                  Magenta_1100: "rgb(110, 7, 133)",
                  Magenta_1200: "rgb(84, 4, 103)",
                  Magenta_1300: "rgb(60, 2, 74)",
                  Magenta_1400: "rgb(35, 4, 42)",
                },
                Pink: {
                  Pink_100: "rgb(255, 230, 242)",
                  Pink_200: "rgb(254, 220, 236)",
                  Pink_300: "rgb(250, 202, 224)",
                  Pink_400: "rgb(247, 173, 207)",
                  Pink_500: "rgb(243, 143, 184)",
                  Pink_600: "rgb(238, 114, 161)",
                  Pink_700: "rgb(231, 78, 144)",
                  Pink_800: "rgb(205, 55, 123)",
                  Pink_900: "rgb(180, 43, 106)",
                  Pink_1000: "rgb(153, 29, 88)",
                  Pink_1100: "rgb(99, 3, 53)",
                  Pink_1200: "rgb(99, 3, 53)",
                  Pink_1300: "rgb(70, 4, 36)",
                  Pink_1400: "rgb(43, 2, 21)",
                },
                Gray: {
                  Gray_100: "rgb(247, 247, 248)",
                  Gray_200: "rgb(238, 239, 241)",
                  Gray_300: "rgb(230, 231, 234)",
                  Gray_400: "rgb(213, 215, 221)",
                  Gray_500: "rgb(188, 190, 200)",
                  Gray_600: "rgb(106, 111, 129)",
                  Gray_700: "rgb(73, 77, 90)",
                  Gray_800: "rgb(53, 55, 65)",
                  Gray_900: "rgb(39, 41, 48)",
                  Gray_1000: "rgb(32, 34, 39)",
                  Gray_1100: "rgb(25, 26, 31)",
                  Gray_1200: "rgb(18, 18, 21)",
                },
              },
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(18, 18, 21)",
                Surface_100: "rgb(25, 26, 31)",
                Surface_200: "rgb(32, 34, 39)",
                Surface_300: "rgb(39, 41, 48)",
              },
              OverMedia: {
                OverMedia_0: "rgba(18, 18, 21, 0.92)",
                OverMedia_100: "rgba(25, 26, 31, 0.92)",
                OverMedia_200: "rgba(32, 34, 39, 0.92)",
                OverMedia_300: "rgba(39, 41, 48, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(208, 217, 251, 0.04)",
                Shift_200: "rgba(208, 217, 251, 0.08)",
                Shift_300: "rgba(208, 217, 251, 0.12)",
                Shift_400: "rgba(208, 217, 251, 0.16)",
              },
              Content: {
                Emphasis: "rgb(247, 247, 248)",
                Default: "rgb(213, 215, 221)",
                Muted: "rgb(188, 190, 200)",
                Link: "rgb(82, 139, 255)",
              },
              Stroke: {
                Emphasis: "rgba(208, 217, 251, 0.16)",
                Default: "rgba(208, 217, 251, 0.12)",
                Muted: "rgba(208, 217, 251, 0.08)",
              },
              System: {
                Contrast: "rgb(247, 247, 248)",
                Neutral: "rgb(188, 190, 200)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(208, 217, 251, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(18, 18, 21)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgba(255, 255, 255, 0.5)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.15)",
                Press: "rgba(255, 255, 255, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.4)",
                Foreground: "rgb(235, 241, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(247, 247, 248)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(208, 217, 251, 0.12)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgb(213, 215, 221)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Config: {
              Theme: {
                Name: "Foundation",
                IsFoundation: "true",
                IsUIBlox: "false",
              },
              ColorMode: { Name: "Dark", IsDark: "true", IsLight: "false" },
              UI: { Interval: 4, Scale: 1, StrokeBase: 1 },
              Text: {
                Interval: 4,
                Scale: 1,
                Font: '"Builder Sans"',
                NominalScale: 1,
                InverseScale: 1,
              },
            },
            DarkMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(18, 18, 21)",
                Surface_100: "rgb(25, 26, 31)",
                Surface_200: "rgb(32, 34, 39)",
                Surface_300: "rgb(39, 41, 48)",
              },
              OverMedia: {
                OverMedia_0: "rgba(18, 18, 21, 0.92)",
                OverMedia_100: "rgba(25, 26, 31, 0.92)",
                OverMedia_200: "rgba(32, 34, 39, 0.92)",
                OverMedia_300: "rgba(39, 41, 48, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(208, 217, 251, 0.04)",
                Shift_200: "rgba(208, 217, 251, 0.08)",
                Shift_300: "rgba(208, 217, 251, 0.12)",
                Shift_400: "rgba(208, 217, 251, 0.16)",
              },
              Content: {
                Emphasis: "rgb(247, 247, 248)",
                Default: "rgb(213, 215, 221)",
                Muted: "rgb(188, 190, 200)",
                Link: "rgb(82, 139, 255)",
              },
              Stroke: {
                Emphasis: "rgba(208, 217, 251, 0.16)",
                Default: "rgba(208, 217, 251, 0.12)",
                Muted: "rgba(208, 217, 251, 0.08)",
              },
              System: {
                Contrast: "rgb(247, 247, 248)",
                Neutral: "rgb(188, 190, 200)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(208, 217, 251, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(18, 18, 21)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgba(255, 255, 255, 0.5)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.15)",
                Press: "rgba(255, 255, 255, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.4)",
                Foreground: "rgb(235, 241, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(247, 247, 248)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(208, 217, 251, 0.12)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgb(213, 215, 221)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            LightMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(255, 255, 255)",
                Surface_100: "rgb(247, 247, 248)",
                Surface_200: "rgb(255, 255, 255)",
                Surface_300: "rgb(247, 247, 248)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.92)",
                OverMedia_100: "rgba(247, 247, 248, 0.92)",
                OverMedia_200: "rgba(255, 255, 255, 0.92)",
                OverMedia_300: "rgba(247, 247, 248, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(27, 37, 75, 0.04)",
                Shift_200: "rgba(27, 37, 75, 0.08)",
                Shift_300: "rgba(27, 37, 75, 0.12)",
                Shift_400: "rgba(27, 37, 75, 0.16)",
              },
              Content: {
                Emphasis: "rgb(32, 34, 39)",
                Default: "rgb(73, 77, 90)",
                Muted: "rgb(106, 111, 129)",
                Link: "rgb(20, 70, 255)",
              },
              Stroke: {
                Emphasis: "rgba(27, 37, 75, 0.16)",
                Default: "rgba(27, 37, 75, 0.12)",
                Muted: "rgba(27, 37, 75, 0.08)",
              },
              System: {
                Contrast: "rgb(32, 34, 39)",
                Neutral: "rgb(73, 77, 90)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(27, 37, 75, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(27, 37, 75, 0.04)",
              },
              Selection: {
                Start: "rgb(188, 190, 200)",
                End: "rgb(188, 190, 200)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.15)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.3)",
                Foreground: "rgb(0, 20, 92)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(32, 34, 39)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(27, 37, 75, 0.12)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgb(73, 77, 90)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Inverse: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(255, 255, 255)",
                Surface_100: "rgb(247, 247, 248)",
                Surface_200: "rgb(255, 255, 255)",
                Surface_300: "rgb(247, 247, 248)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.92)",
                OverMedia_100: "rgba(247, 247, 248, 0.92)",
                OverMedia_200: "rgba(255, 255, 255, 0.92)",
                OverMedia_300: "rgba(247, 247, 248, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(27, 37, 75, 0.04)",
                Shift_200: "rgba(27, 37, 75, 0.08)",
                Shift_300: "rgba(27, 37, 75, 0.12)",
                Shift_400: "rgba(27, 37, 75, 0.16)",
              },
              Content: {
                Emphasis: "rgb(32, 34, 39)",
                Default: "rgb(73, 77, 90)",
                Muted: "rgb(106, 111, 129)",
                Link: "rgb(20, 70, 255)",
              },
              Stroke: {
                Emphasis: "rgba(27, 37, 75, 0.16)",
                Default: "rgba(27, 37, 75, 0.12)",
                Muted: "rgba(27, 37, 75, 0.08)",
              },
              System: {
                Contrast: "rgb(32, 34, 39)",
                Neutral: "rgb(73, 77, 90)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(27, 37, 75, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(27, 37, 75, 0.04)",
              },
              Selection: {
                Start: "rgb(188, 190, 200)",
                End: "rgb(188, 190, 200)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.15)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.3)",
                Foreground: "rgb(0, 20, 92)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(32, 34, 39)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(27, 37, 75, 0.12)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgb(73, 77, 90)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Size: {
              Size_0: 0,
              Size_50: 2,
              Size_100: 4,
              Size_150: 6,
              Size_200: 8,
              Size_250: 10,
              Size_300: 12,
              Size_350: 14,
              Size_400: 16,
              Size_500: 20,
              Size_600: 24,
              Size_700: 28,
              Size_800: 32,
              Size_900: 36,
              Size_1000: 40,
              Size_1100: 44,
              Size_1200: 48,
              Size_1300: 52,
              Size_1400: 56,
              Size_1500: 60,
              Size_1600: 64,
              Size_1700: 68,
              Size_1800: 72,
              Size_1900: 76,
              Size_2000: 80,
              Size_2100: 84,
              Size_2200: 88,
              Size_2300: 92,
              Size_2400: 96,
              Size_2500: 100,
              Size_2600: 104,
              Size_2700: 108,
              Size_2800: 112,
              Size_2900: 116,
              Size_3000: 120,
            },
            Padding: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Margin: { None: 0, Small: 20, Medium: 24, Large: 48 },
            Gap: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Gutter: {
              None: 0,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Radius: {
              None: 0,
              XSmall: 2,
              Small: 4,
              Medium: 8,
              Large: 16,
              Circle: 9999,
            },
            Stroke: { None: 0, Thin: 0.5, Standard: 1, Thick: 1.5, Thicker: 3 },
            LineHeight: {
              LineHeight_100: 1,
              LineHeight_120: 1.2,
              LineHeight_130: 1.3,
              LineHeight_140: 1.4,
            },
            LetterSpacing: { Tight: -0.01, Default: 0, Loose: 0.01 },
            FontSize: {
              FontSize_200: 8,
              FontSize_250: 10,
              FontSize_300: 12,
              FontSize_350: 14,
              FontSize_400: 16,
              FontSize_500: 20,
              FontSize_600: 24,
              FontSize_700: 28,
              FontSize_800: 32,
              FontSize_900: 36,
              FontSize_1000: 40,
              FontSize_1100: 44,
              FontSize_1200: 48,
              FontSize_1300: 52,
              FontSize_1400: 56,
              FontSize_1500: 60,
              FontSize_1600: 64,
              FontSize_1700: 68,
              FontSize_1800: 72,
              FontSize_1900: 76,
              FontSize_2000: 80,
              FontSize_2100: 84,
              FontSize_2200: 88,
              FontSize_2300: 92,
              FontSize_2400: 96,
              FontSize_2500: 100,
              FontSize_2600: 104,
              FontSize_2700: 108,
              FontSize_2800: 112,
              FontSize_2900: 116,
              FontSize_3000: 120,
            },
            FontWeight: {
              FontWeight_300: "300",
              FontWeight_400: "400",
              FontWeight_500: "500",
              FontWeight_600: "600",
              FontWeight_700: "700",
              FontWeight_800: "800",
            },
            Typography: {
              DisplayLarge: {
                Font: '700 80/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 80,
                LineHeight: 1.2,
              },
              DisplayMedium: {
                Font: '700 56/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 56,
                LineHeight: 1.2,
              },
              DisplaySmall: {
                Font: '700 40/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 40,
                LineHeight: 1.2,
              },
              HeadingLarge: {
                Font: '700 28/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 28,
                LineHeight: 1.2,
              },
              HeadingMedium: {
                Font: '700 24/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 24,
                LineHeight: 1.2,
              },
              HeadingSmall: {
                Font: '700 20/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 20,
                LineHeight: 1.2,
              },
              TitleLarge: {
                Font: '700 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 16,
                LineHeight: 1.4,
              },
              TitleMedium: {
                Font: '700 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 14,
                LineHeight: 1.4,
              },
              TitleSmall: {
                Font: '700 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 12,
                LineHeight: 1.4,
              },
              LabelLarge: {
                Font: '600 16/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 16,
                LineHeight: 1,
              },
              LabelMedium: {
                Font: '600 14/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1,
              },
              LabelSmall: {
                Font: '600 12/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1,
              },
              BodyLarge: {
                Font: '400 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 16,
                LineHeight: 1.4,
              },
              BodyMedium: {
                Font: '400 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 14,
                LineHeight: 1.4,
              },
              BodySmall: {
                Font: '400 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionLarge: {
                Font: '600 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1.4,
              },
              CaptionMedium: {
                Font: '600 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionSmall: {
                Font: '600 10/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 10,
                LineHeight: 1.4,
              },
            },
            Time: {
              Time_50: 0.05,
              Time_100: 0.1,
              Time_200: 0.2,
              Time_300: 0.3,
              Time_400: 0.4,
              Time_500: 0.5,
              Time_600: 0.6,
              Time_700: 0.7,
              Time_800: 0.8,
              Time_900: 0.9,
              Time_1000: 1,
            },
            Ease: {
              StandardIn: {
                Bezier: "cubic-bezier(0.8, 0, 0.4, 1)",
                Raw: [0.8, 0, 0.4, 1],
              },
              StandardOut: {
                Bezier: "cubic-bezier(0.2, 0, 0, 1)",
                Raw: [0.2, 0, 0, 1],
              },
              ExpressiveIn: {
                Bezier: "cubic-bezier(0.25, 0, 0.5, -1)",
                Raw: [0.25, 0, 0.5, -1],
              },
              ExpressiveOut: {
                Bezier: "cubic-bezier(0.25, 1.5, 0.5, 1)",
                Raw: [0.25, 1.5, 0.5, 1],
              },
              Linear: { Bezier: "cubic-bezier(0, 0, 1, 1)", Raw: [0, 0, 1, 1] },
            },
          });
      },
      489: function (r, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.FoundationLight = void 0),
          (e.FoundationLight = {
            Color: {
              Extended: {
                Black: {
                  Black_0: "rgba(0, 0, 0, 0)",
                  Black_03: "rgba(0, 0, 0, 0.03)",
                  Black_05: "rgba(0, 0, 0, 0.05)",
                  Black_10: "rgba(0, 0, 0, 0.1)",
                  Black_15: "rgba(0, 0, 0, 0.15)",
                  Black_20: "rgba(0, 0, 0, 0.2)",
                  Black_30: "rgba(0, 0, 0, 0.3)",
                  Black_40: "rgba(0, 0, 0, 0.4)",
                  Black_50: "rgba(0, 0, 0, 0.5)",
                  Black_60: "rgba(0, 0, 0, 0.6)",
                  Black_70: "rgba(0, 0, 0, 0.7)",
                  Black_80: "rgba(0, 0, 0, 0.8)",
                  Black_85: "rgba(0, 0, 0, 0.85)",
                  Black_90: "rgba(0, 0, 0, 0.9)",
                  Black_95: "rgba(0, 0, 0, 0.95)",
                  Black_97: "rgba(0, 0, 0, 0.97)",
                  Black_100: "rgb(0, 0, 0)",
                },
                White: {
                  White_0: "rgba(255, 255, 255, 0)",
                  White_03: "rgba(255, 255, 255, 0.03)",
                  White_05: "rgba(255, 255, 255, 0.05)",
                  White_10: "rgba(255, 255, 255, 0.1)",
                  White_15: "rgba(255, 255, 255, 0.15)",
                  White_20: "rgba(255, 255, 255, 0.2)",
                  White_30: "rgba(255, 255, 255, 0.3)",
                  White_40: "rgba(255, 255, 255, 0.4)",
                  White_50: "rgba(255, 255, 255, 0.5)",
                  White_60: "rgba(255, 255, 255, 0.6)",
                  White_70: "rgba(255, 255, 255, 0.7)",
                  White_80: "rgba(255, 255, 255, 0.8)",
                  White_85: "rgba(255, 255, 255, 0.85)",
                  White_90: "rgba(255, 255, 255, 0.9)",
                  White_95: "rgba(255, 255, 255, 0.95)",
                  White_97: "rgba(255, 255, 255, 0.97)",
                  White_100: "rgb(255, 255, 255)",
                },
                Red: {
                  Red_100: "rgb(255, 234, 233)",
                  Red_200: "rgb(255, 223, 222)",
                  Red_300: "rgb(247, 205, 203)",
                  Red_400: "rgb(243, 178, 174)",
                  Red_500: "rgb(238, 151, 145)",
                  Red_600: "rgb(235, 121, 115)",
                  Red_700: "rgb(231, 87, 80)",
                  Red_800: "rgb(223, 40, 31)",
                  Red_900: "rgb(197, 18, 10)",
                  Red_1000: "rgb(164, 17, 9)",
                  Red_1100: "rgb(131, 15, 7)",
                  Red_1200: "rgb(100, 12, 5)",
                  Red_1300: "rgb(71, 8, 4)",
                  Red_1400: "rgb(40, 6, 3)",
                },
                Orange: {
                  Orange_100: "rgb(253, 232, 216)",
                  Orange_200: "rgb(252, 222, 199)",
                  Orange_300: "rgb(251, 206, 174)",
                  Orange_400: "rgb(251, 178, 134)",
                  Orange_500: "rgb(250, 148, 90)",
                  Orange_600: "rgb(245, 118, 48)",
                  Orange_700: "rgb(220, 100, 35)",
                  Orange_800: "rgb(192, 80, 20)",
                  Orange_900: "rgb(169, 67, 11)",
                  Orange_1000: "rgb(144, 51, 0)",
                  Orange_1100: "rgb(115, 40, 0)",
                  Orange_1200: "rgb(87, 30, 0)",
                  Orange_1300: "rgb(60, 21, 0)",
                  Orange_1400: "rgb(33, 13, 1)",
                },
                Yellow: {
                  Yellow_100: "rgb(253, 236, 193)",
                  Yellow_200: "rgb(250, 228, 170)",
                  Yellow_300: "rgb(247, 210, 115)",
                  Yellow_400: "rgb(242, 186, 42)",
                  Yellow_500: "rgb(219, 166, 31)",
                  Yellow_600: "rgb(196, 147, 21)",
                  Yellow_700: "rgb(174, 128, 11)",
                  Yellow_800: "rgb(151, 108, 0)",
                  Yellow_900: "rgb(129, 93, 0)",
                  Yellow_1000: "rgb(107, 76, 0)",
                  Yellow_1100: "rgb(83, 61, 2)",
                  Yellow_1200: "rgb(63, 45, 1)",
                  Yellow_1300: "rgb(44, 31, 0)",
                  Yellow_1400: "rgb(24, 17, 0)",
                },
                Green: {
                  Green_100: "rgb(208, 251, 227)",
                  Green_200: "rgb(176, 246, 208)",
                  Green_300: "rgb(142, 233, 182)",
                  Green_400: "rgb(101, 215, 157)",
                  Green_500: "rgb(57, 197, 130)",
                  Green_600: "rgb(29, 177, 106)",
                  Green_700: "rgb(12, 155, 90)",
                  Green_800: "rgb(1, 133, 75)",
                  Green_900: "rgb(2, 114, 64)",
                  Green_1000: "rgb(1, 95, 53)",
                  Green_1100: "rgb(0, 74, 41)",
                  Green_1200: "rgb(1, 56, 31)",
                  Green_1300: "rgb(10, 38, 18)",
                  Green_1400: "rgb(0, 22, 12)",
                },
                Turquoise: {
                  Turquoise_100: "rgb(200, 246, 255)",
                  Turquoise_200: "rgb(163, 239, 254)",
                  Turquoise_300: "rgb(126, 229, 248)",
                  Turquoise_400: "rgb(92, 210, 232)",
                  Turquoise_500: "rgb(57, 189, 216)",
                  Turquoise_600: "rgb(22, 169, 199)",
                  Turquoise_700: "rgb(4, 148, 178)",
                  Turquoise_800: "rgb(18, 125, 152)",
                  Turquoise_900: "rgb(5, 108, 130)",
                  Turquoise_1000: "rgb(5, 90, 106)",
                  Turquoise_1100: "rgb(4, 71, 84)",
                  Turquoise_1200: "rgb(2, 53, 63)",
                  Turquoise_1300: "rgb(2, 37, 44)",
                  Turquoise_1400: "rgb(2, 20, 24)",
                },
                Blue: {
                  Blue_100: "rgb(235, 241, 255)",
                  Blue_200: "rgb(204, 221, 255)",
                  Blue_300: "rgb(173, 201, 255)",
                  Blue_400: "rgb(143, 180, 255)",
                  Blue_500: "rgb(112, 160, 255)",
                  Blue_600: "rgb(82, 139, 255)",
                  Blue_700: "rgb(51, 95, 255)",
                  Blue_800: "rgb(20, 70, 255)",
                  Blue_900: "rgb(0, 53, 245)",
                  Blue_1000: "rgb(0, 45, 214)",
                  Blue_1100: "rgb(0, 39, 184)",
                  Blue_1200: "rgb(0, 34, 153)",
                  Blue_1300: "rgb(0, 27, 122)",
                  Blue_1400: "rgb(0, 20, 92)",
                },
                Purple: {
                  Purple_100: "rgb(241, 231, 255)",
                  Purple_200: "rgb(233, 222, 251)",
                  Purple_300: "rgb(226, 206, 253)",
                  Purple_400: "rgb(212, 181, 252)",
                  Purple_500: "rgb(197, 156, 249)",
                  Purple_600: "rgb(182, 130, 247)",
                  Purple_700: "rgb(167, 102, 245)",
                  Purple_800: "rgb(147, 72, 240)",
                  Purple_900: "rgb(130, 46, 231)",
                  Purple_1000: "rgb(108, 33, 198)",
                  Purple_1100: "rgb(86, 20, 165)",
                  Purple_1200: "rgb(65, 8, 134)",
                  Purple_1300: "rgb(45, 4, 96)",
                  Purple_1400: "rgb(28, 2, 59)",
                },
                Magenta: {
                  Magenta_100: "rgb(253, 232, 249)",
                  Magenta_200: "rgb(253, 221, 253)",
                  Magenta_300: "rgb(245, 200, 252)",
                  Magenta_400: "rgb(239, 170, 250)",
                  Magenta_500: "rgb(232, 139, 248)",
                  Magenta_600: "rgb(223, 106, 247)",
                  Magenta_700: "rgb(213, 64, 245)",
                  Magenta_800: "rgb(192, 10, 232)",
                  Magenta_900: "rgb(165, 14, 200)",
                  Magenta_1000: "rgb(138, 12, 167)",
                  Magenta_1100: "rgb(110, 7, 133)",
                  Magenta_1200: "rgb(84, 4, 103)",
                  Magenta_1300: "rgb(60, 2, 74)",
                  Magenta_1400: "rgb(35, 4, 42)",
                },
                Pink: {
                  Pink_100: "rgb(255, 230, 242)",
                  Pink_200: "rgb(254, 220, 236)",
                  Pink_300: "rgb(250, 202, 224)",
                  Pink_400: "rgb(247, 173, 207)",
                  Pink_500: "rgb(243, 143, 184)",
                  Pink_600: "rgb(238, 114, 161)",
                  Pink_700: "rgb(231, 78, 144)",
                  Pink_800: "rgb(205, 55, 123)",
                  Pink_900: "rgb(180, 43, 106)",
                  Pink_1000: "rgb(153, 29, 88)",
                  Pink_1100: "rgb(99, 3, 53)",
                  Pink_1200: "rgb(99, 3, 53)",
                  Pink_1300: "rgb(70, 4, 36)",
                  Pink_1400: "rgb(43, 2, 21)",
                },
                Gray: {
                  Gray_100: "rgb(247, 247, 248)",
                  Gray_200: "rgb(238, 239, 241)",
                  Gray_300: "rgb(230, 231, 234)",
                  Gray_400: "rgb(213, 215, 221)",
                  Gray_500: "rgb(188, 190, 200)",
                  Gray_600: "rgb(106, 111, 129)",
                  Gray_700: "rgb(73, 77, 90)",
                  Gray_800: "rgb(53, 55, 65)",
                  Gray_900: "rgb(39, 41, 48)",
                  Gray_1000: "rgb(32, 34, 39)",
                  Gray_1100: "rgb(25, 26, 31)",
                  Gray_1200: "rgb(18, 18, 21)",
                },
              },
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(255, 255, 255)",
                Surface_100: "rgb(247, 247, 248)",
                Surface_200: "rgb(255, 255, 255)",
                Surface_300: "rgb(247, 247, 248)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.92)",
                OverMedia_100: "rgba(247, 247, 248, 0.92)",
                OverMedia_200: "rgba(255, 255, 255, 0.92)",
                OverMedia_300: "rgba(247, 247, 248, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(27, 37, 75, 0.04)",
                Shift_200: "rgba(27, 37, 75, 0.08)",
                Shift_300: "rgba(27, 37, 75, 0.12)",
                Shift_400: "rgba(27, 37, 75, 0.16)",
              },
              Content: {
                Emphasis: "rgb(32, 34, 39)",
                Default: "rgb(73, 77, 90)",
                Muted: "rgb(106, 111, 129)",
                Link: "rgb(20, 70, 255)",
              },
              Stroke: {
                Emphasis: "rgba(27, 37, 75, 0.16)",
                Default: "rgba(27, 37, 75, 0.12)",
                Muted: "rgba(27, 37, 75, 0.08)",
              },
              System: {
                Contrast: "rgb(32, 34, 39)",
                Neutral: "rgb(73, 77, 90)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(27, 37, 75, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(27, 37, 75, 0.04)",
              },
              Selection: {
                Start: "rgb(188, 190, 200)",
                End: "rgb(188, 190, 200)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.15)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.3)",
                Foreground: "rgb(0, 20, 92)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(32, 34, 39)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(27, 37, 75, 0.12)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgb(73, 77, 90)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Config: {
              Theme: {
                Name: "Foundation",
                IsFoundation: "true",
                IsUIBlox: "false",
              },
              ColorMode: { Name: "Light", IsDark: "false", IsLight: "true" },
              UI: { Interval: 4, Scale: 1, StrokeBase: 1 },
              Text: {
                Interval: 4,
                Scale: 1,
                Font: '"Builder Sans"',
                NominalScale: 1,
                InverseScale: 1,
              },
            },
            DarkMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(18, 18, 21)",
                Surface_100: "rgb(25, 26, 31)",
                Surface_200: "rgb(32, 34, 39)",
                Surface_300: "rgb(39, 41, 48)",
              },
              OverMedia: {
                OverMedia_0: "rgba(18, 18, 21, 0.92)",
                OverMedia_100: "rgba(25, 26, 31, 0.92)",
                OverMedia_200: "rgba(32, 34, 39, 0.92)",
                OverMedia_300: "rgba(39, 41, 48, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(208, 217, 251, 0.04)",
                Shift_200: "rgba(208, 217, 251, 0.08)",
                Shift_300: "rgba(208, 217, 251, 0.12)",
                Shift_400: "rgba(208, 217, 251, 0.16)",
              },
              Content: {
                Emphasis: "rgb(247, 247, 248)",
                Default: "rgb(213, 215, 221)",
                Muted: "rgb(188, 190, 200)",
                Link: "rgb(82, 139, 255)",
              },
              Stroke: {
                Emphasis: "rgba(208, 217, 251, 0.16)",
                Default: "rgba(208, 217, 251, 0.12)",
                Muted: "rgba(208, 217, 251, 0.08)",
              },
              System: {
                Contrast: "rgb(247, 247, 248)",
                Neutral: "rgb(188, 190, 200)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(208, 217, 251, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(18, 18, 21)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgba(255, 255, 255, 0.5)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.15)",
                Press: "rgba(255, 255, 255, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.4)",
                Foreground: "rgb(235, 241, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(247, 247, 248)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(208, 217, 251, 0.12)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgb(213, 215, 221)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            LightMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(255, 255, 255)",
                Surface_100: "rgb(247, 247, 248)",
                Surface_200: "rgb(255, 255, 255)",
                Surface_300: "rgb(247, 247, 248)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.92)",
                OverMedia_100: "rgba(247, 247, 248, 0.92)",
                OverMedia_200: "rgba(255, 255, 255, 0.92)",
                OverMedia_300: "rgba(247, 247, 248, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(27, 37, 75, 0.04)",
                Shift_200: "rgba(27, 37, 75, 0.08)",
                Shift_300: "rgba(27, 37, 75, 0.12)",
                Shift_400: "rgba(27, 37, 75, 0.16)",
              },
              Content: {
                Emphasis: "rgb(32, 34, 39)",
                Default: "rgb(73, 77, 90)",
                Muted: "rgb(106, 111, 129)",
                Link: "rgb(20, 70, 255)",
              },
              Stroke: {
                Emphasis: "rgba(27, 37, 75, 0.16)",
                Default: "rgba(27, 37, 75, 0.12)",
                Muted: "rgba(27, 37, 75, 0.08)",
              },
              System: {
                Contrast: "rgb(32, 34, 39)",
                Neutral: "rgb(73, 77, 90)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(27, 37, 75, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(27, 37, 75, 0.04)",
              },
              Selection: {
                Start: "rgb(188, 190, 200)",
                End: "rgb(188, 190, 200)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.15)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.3)",
                Foreground: "rgb(0, 20, 92)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(32, 34, 39)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(27, 37, 75, 0.12)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgb(73, 77, 90)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Inverse: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(18, 18, 21)",
                Surface_100: "rgb(25, 26, 31)",
                Surface_200: "rgb(32, 34, 39)",
                Surface_300: "rgb(39, 41, 48)",
              },
              OverMedia: {
                OverMedia_0: "rgba(18, 18, 21, 0.92)",
                OverMedia_100: "rgba(25, 26, 31, 0.92)",
                OverMedia_200: "rgba(32, 34, 39, 0.92)",
                OverMedia_300: "rgba(39, 41, 48, 0.92)",
              },
              Shift: {
                Shift_100: "rgba(208, 217, 251, 0.04)",
                Shift_200: "rgba(208, 217, 251, 0.08)",
                Shift_300: "rgba(208, 217, 251, 0.12)",
                Shift_400: "rgba(208, 217, 251, 0.16)",
              },
              Content: {
                Emphasis: "rgb(247, 247, 248)",
                Default: "rgb(213, 215, 221)",
                Muted: "rgb(188, 190, 200)",
                Link: "rgb(82, 139, 255)",
              },
              Stroke: {
                Emphasis: "rgba(208, 217, 251, 0.16)",
                Default: "rgba(208, 217, 251, 0.12)",
                Muted: "rgba(208, 217, 251, 0.08)",
              },
              System: {
                Contrast: "rgb(247, 247, 248)",
                Neutral: "rgb(188, 190, 200)",
                Emphasis: "rgb(51, 95, 255)",
                Success: "rgb(57, 197, 130)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(223, 40, 31)",
              },
              Common: {
                Shimmer: "rgba(208, 217, 251, 0.12)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(18, 18, 21)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgba(255, 255, 255, 0.5)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.15)",
                Press: "rgba(255, 255, 255, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(51, 95, 255)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgba(51, 95, 255, 0.4)",
                Foreground: "rgb(235, 241, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(247, 247, 248)",
                Foreground: "rgb(32, 34, 39)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(208, 217, 251, 0.12)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgb(213, 215, 221)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgb(223, 40, 31)",
                Foreground: "rgb(247, 247, 248)",
                Border: "rgba(0, 0, 0, 0)",
              },
            },
            Size: {
              Size_0: 0,
              Size_50: 2,
              Size_100: 4,
              Size_150: 6,
              Size_200: 8,
              Size_250: 10,
              Size_300: 12,
              Size_350: 14,
              Size_400: 16,
              Size_500: 20,
              Size_600: 24,
              Size_700: 28,
              Size_800: 32,
              Size_900: 36,
              Size_1000: 40,
              Size_1100: 44,
              Size_1200: 48,
              Size_1300: 52,
              Size_1400: 56,
              Size_1500: 60,
              Size_1600: 64,
              Size_1700: 68,
              Size_1800: 72,
              Size_1900: 76,
              Size_2000: 80,
              Size_2100: 84,
              Size_2200: 88,
              Size_2300: 92,
              Size_2400: 96,
              Size_2500: 100,
              Size_2600: 104,
              Size_2700: 108,
              Size_2800: 112,
              Size_2900: 116,
              Size_3000: 120,
            },
            Padding: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Margin: { None: 0, Small: 20, Medium: 24, Large: 48 },
            Gap: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Gutter: {
              None: 0,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Radius: {
              None: 0,
              XSmall: 2,
              Small: 4,
              Medium: 8,
              Large: 16,
              Circle: 9999,
            },
            Stroke: { None: 0, Thin: 0.5, Standard: 1, Thick: 1.5, Thicker: 3 },
            LineHeight: {
              LineHeight_100: 1,
              LineHeight_120: 1.2,
              LineHeight_130: 1.3,
              LineHeight_140: 1.4,
            },
            LetterSpacing: { Tight: -0.01, Default: 0, Loose: 0.01 },
            FontSize: {
              FontSize_200: 8,
              FontSize_250: 10,
              FontSize_300: 12,
              FontSize_350: 14,
              FontSize_400: 16,
              FontSize_500: 20,
              FontSize_600: 24,
              FontSize_700: 28,
              FontSize_800: 32,
              FontSize_900: 36,
              FontSize_1000: 40,
              FontSize_1100: 44,
              FontSize_1200: 48,
              FontSize_1300: 52,
              FontSize_1400: 56,
              FontSize_1500: 60,
              FontSize_1600: 64,
              FontSize_1700: 68,
              FontSize_1800: 72,
              FontSize_1900: 76,
              FontSize_2000: 80,
              FontSize_2100: 84,
              FontSize_2200: 88,
              FontSize_2300: 92,
              FontSize_2400: 96,
              FontSize_2500: 100,
              FontSize_2600: 104,
              FontSize_2700: 108,
              FontSize_2800: 112,
              FontSize_2900: 116,
              FontSize_3000: 120,
            },
            FontWeight: {
              FontWeight_300: "300",
              FontWeight_400: "400",
              FontWeight_500: "500",
              FontWeight_600: "600",
              FontWeight_700: "700",
              FontWeight_800: "800",
            },
            Typography: {
              DisplayLarge: {
                Font: '700 80/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 80,
                LineHeight: 1.2,
              },
              DisplayMedium: {
                Font: '700 56/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 56,
                LineHeight: 1.2,
              },
              DisplaySmall: {
                Font: '700 40/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 40,
                LineHeight: 1.2,
              },
              HeadingLarge: {
                Font: '700 28/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 28,
                LineHeight: 1.2,
              },
              HeadingMedium: {
                Font: '700 24/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 24,
                LineHeight: 1.2,
              },
              HeadingSmall: {
                Font: '700 20/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 20,
                LineHeight: 1.2,
              },
              TitleLarge: {
                Font: '700 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 16,
                LineHeight: 1.4,
              },
              TitleMedium: {
                Font: '700 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 14,
                LineHeight: 1.4,
              },
              TitleSmall: {
                Font: '700 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 12,
                LineHeight: 1.4,
              },
              LabelLarge: {
                Font: '600 16/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 16,
                LineHeight: 1,
              },
              LabelMedium: {
                Font: '600 14/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1,
              },
              LabelSmall: {
                Font: '600 12/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1,
              },
              BodyLarge: {
                Font: '400 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 16,
                LineHeight: 1.4,
              },
              BodyMedium: {
                Font: '400 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 14,
                LineHeight: 1.4,
              },
              BodySmall: {
                Font: '400 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionLarge: {
                Font: '600 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1.4,
              },
              CaptionMedium: {
                Font: '600 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionSmall: {
                Font: '600 10/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 10,
                LineHeight: 1.4,
              },
            },
            Time: {
              Time_50: 0.05,
              Time_100: 0.1,
              Time_200: 0.2,
              Time_300: 0.3,
              Time_400: 0.4,
              Time_500: 0.5,
              Time_600: 0.6,
              Time_700: 0.7,
              Time_800: 0.8,
              Time_900: 0.9,
              Time_1000: 1,
            },
            Ease: {
              StandardIn: {
                Bezier: "cubic-bezier(0.8, 0, 0.4, 1)",
                Raw: [0.8, 0, 0.4, 1],
              },
              StandardOut: {
                Bezier: "cubic-bezier(0.2, 0, 0, 1)",
                Raw: [0.2, 0, 0, 1],
              },
              ExpressiveIn: {
                Bezier: "cubic-bezier(0.25, 0, 0.5, -1)",
                Raw: [0.25, 0, 0.5, -1],
              },
              ExpressiveOut: {
                Bezier: "cubic-bezier(0.25, 1.5, 0.5, 1)",
                Raw: [0.25, 1.5, 0.5, 1],
              },
              Linear: { Bezier: "cubic-bezier(0, 0, 1, 1)", Raw: [0, 0, 1, 1] },
            },
          });
      },
      664: function (r, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.UIBloxDark = void 0),
          (e.UIBloxDark = {
            Color: {
              Extended: {
                Black: {
                  Black_0: "rgba(0, 0, 0, 0)",
                  Black_03: "rgba(0, 0, 0, 0.03)",
                  Black_05: "rgba(0, 0, 0, 0.05)",
                  Black_10: "rgba(0, 0, 0, 0.1)",
                  Black_15: "rgba(0, 0, 0, 0.15)",
                  Black_20: "rgba(0, 0, 0, 0.2)",
                  Black_30: "rgba(0, 0, 0, 0.3)",
                  Black_40: "rgba(0, 0, 0, 0.4)",
                  Black_50: "rgba(0, 0, 0, 0.5)",
                  Black_60: "rgba(0, 0, 0, 0.6)",
                  Black_70: "rgba(0, 0, 0, 0.7)",
                  Black_80: "rgba(0, 0, 0, 0.8)",
                  Black_85: "rgba(0, 0, 0, 0.85)",
                  Black_90: "rgba(0, 0, 0, 0.9)",
                  Black_95: "rgba(0, 0, 0, 0.95)",
                  Black_97: "rgba(0, 0, 0, 0.97)",
                  Black_100: "rgb(0, 0, 0)",
                },
                White: {
                  White_0: "rgba(255, 255, 255, 0)",
                  White_03: "rgba(255, 255, 255, 0.03)",
                  White_05: "rgba(255, 255, 255, 0.05)",
                  White_10: "rgba(255, 255, 255, 0.1)",
                  White_15: "rgba(255, 255, 255, 0.15)",
                  White_20: "rgba(255, 255, 255, 0.2)",
                  White_30: "rgba(255, 255, 255, 0.3)",
                  White_40: "rgba(255, 255, 255, 0.4)",
                  White_50: "rgba(255, 255, 255, 0.5)",
                  White_60: "rgba(255, 255, 255, 0.6)",
                  White_70: "rgba(255, 255, 255, 0.7)",
                  White_80: "rgba(255, 255, 255, 0.8)",
                  White_85: "rgba(255, 255, 255, 0.85)",
                  White_90: "rgba(255, 255, 255, 0.9)",
                  White_95: "rgba(255, 255, 255, 0.95)",
                  White_97: "rgba(255, 255, 255, 0.97)",
                  White_100: "rgb(255, 255, 255)",
                },
                Red: {
                  Red_100: "rgb(255, 234, 233)",
                  Red_200: "rgb(255, 223, 222)",
                  Red_300: "rgb(247, 205, 203)",
                  Red_400: "rgb(243, 178, 174)",
                  Red_500: "rgb(238, 151, 145)",
                  Red_600: "rgb(235, 121, 115)",
                  Red_700: "rgb(231, 87, 80)",
                  Red_800: "rgb(223, 40, 31)",
                  Red_900: "rgb(197, 18, 10)",
                  Red_1000: "rgb(164, 17, 9)",
                  Red_1100: "rgb(131, 15, 7)",
                  Red_1200: "rgb(100, 12, 5)",
                  Red_1300: "rgb(71, 8, 4)",
                  Red_1400: "rgb(40, 6, 3)",
                },
                Orange: {
                  Orange_100: "rgb(253, 232, 216)",
                  Orange_200: "rgb(252, 222, 199)",
                  Orange_300: "rgb(251, 206, 174)",
                  Orange_400: "rgb(251, 178, 134)",
                  Orange_500: "rgb(250, 148, 90)",
                  Orange_600: "rgb(245, 118, 48)",
                  Orange_700: "rgb(220, 100, 35)",
                  Orange_800: "rgb(192, 80, 20)",
                  Orange_900: "rgb(169, 67, 11)",
                  Orange_1000: "rgb(144, 51, 0)",
                  Orange_1100: "rgb(115, 40, 0)",
                  Orange_1200: "rgb(87, 30, 0)",
                  Orange_1300: "rgb(60, 21, 0)",
                  Orange_1400: "rgb(33, 13, 1)",
                },
                Yellow: {
                  Yellow_100: "rgb(253, 236, 193)",
                  Yellow_200: "rgb(250, 228, 170)",
                  Yellow_300: "rgb(247, 210, 115)",
                  Yellow_400: "rgb(242, 186, 42)",
                  Yellow_500: "rgb(219, 166, 31)",
                  Yellow_600: "rgb(196, 147, 21)",
                  Yellow_700: "rgb(174, 128, 11)",
                  Yellow_800: "rgb(151, 108, 0)",
                  Yellow_900: "rgb(129, 93, 0)",
                  Yellow_1000: "rgb(107, 76, 0)",
                  Yellow_1100: "rgb(83, 61, 2)",
                  Yellow_1200: "rgb(63, 45, 1)",
                  Yellow_1300: "rgb(44, 31, 0)",
                  Yellow_1400: "rgb(24, 17, 0)",
                },
                Green: {
                  Green_100: "rgb(208, 251, 227)",
                  Green_200: "rgb(176, 246, 208)",
                  Green_300: "rgb(142, 233, 182)",
                  Green_400: "rgb(101, 215, 157)",
                  Green_500: "rgb(57, 197, 130)",
                  Green_600: "rgb(29, 177, 106)",
                  Green_700: "rgb(12, 155, 90)",
                  Green_800: "rgb(1, 133, 75)",
                  Green_900: "rgb(2, 114, 64)",
                  Green_1000: "rgb(1, 95, 53)",
                  Green_1100: "rgb(0, 74, 41)",
                  Green_1200: "rgb(1, 56, 31)",
                  Green_1300: "rgb(10, 38, 18)",
                  Green_1400: "rgb(0, 22, 12)",
                },
                Turquoise: {
                  Turquoise_100: "rgb(200, 246, 255)",
                  Turquoise_200: "rgb(163, 239, 254)",
                  Turquoise_300: "rgb(126, 229, 248)",
                  Turquoise_400: "rgb(92, 210, 232)",
                  Turquoise_500: "rgb(57, 189, 216)",
                  Turquoise_600: "rgb(22, 169, 199)",
                  Turquoise_700: "rgb(4, 148, 178)",
                  Turquoise_800: "rgb(18, 125, 152)",
                  Turquoise_900: "rgb(5, 108, 130)",
                  Turquoise_1000: "rgb(5, 90, 106)",
                  Turquoise_1100: "rgb(4, 71, 84)",
                  Turquoise_1200: "rgb(2, 53, 63)",
                  Turquoise_1300: "rgb(2, 37, 44)",
                  Turquoise_1400: "rgb(2, 20, 24)",
                },
                Blue: {
                  Blue_100: "rgb(235, 241, 255)",
                  Blue_200: "rgb(204, 221, 255)",
                  Blue_300: "rgb(173, 201, 255)",
                  Blue_400: "rgb(143, 180, 255)",
                  Blue_500: "rgb(112, 160, 255)",
                  Blue_600: "rgb(82, 139, 255)",
                  Blue_700: "rgb(51, 95, 255)",
                  Blue_800: "rgb(20, 70, 255)",
                  Blue_900: "rgb(0, 53, 245)",
                  Blue_1000: "rgb(0, 45, 214)",
                  Blue_1100: "rgb(0, 39, 184)",
                  Blue_1200: "rgb(0, 34, 153)",
                  Blue_1300: "rgb(0, 27, 122)",
                  Blue_1400: "rgb(0, 20, 92)",
                },
                Purple: {
                  Purple_100: "rgb(241, 231, 255)",
                  Purple_200: "rgb(233, 222, 251)",
                  Purple_300: "rgb(226, 206, 253)",
                  Purple_400: "rgb(212, 181, 252)",
                  Purple_500: "rgb(197, 156, 249)",
                  Purple_600: "rgb(182, 130, 247)",
                  Purple_700: "rgb(167, 102, 245)",
                  Purple_800: "rgb(147, 72, 240)",
                  Purple_900: "rgb(130, 46, 231)",
                  Purple_1000: "rgb(108, 33, 198)",
                  Purple_1100: "rgb(86, 20, 165)",
                  Purple_1200: "rgb(65, 8, 134)",
                  Purple_1300: "rgb(45, 4, 96)",
                  Purple_1400: "rgb(28, 2, 59)",
                },
                Magenta: {
                  Magenta_100: "rgb(253, 232, 249)",
                  Magenta_200: "rgb(253, 221, 253)",
                  Magenta_300: "rgb(245, 200, 252)",
                  Magenta_400: "rgb(239, 170, 250)",
                  Magenta_500: "rgb(232, 139, 248)",
                  Magenta_600: "rgb(223, 106, 247)",
                  Magenta_700: "rgb(213, 64, 245)",
                  Magenta_800: "rgb(192, 10, 232)",
                  Magenta_900: "rgb(165, 14, 200)",
                  Magenta_1000: "rgb(138, 12, 167)",
                  Magenta_1100: "rgb(110, 7, 133)",
                  Magenta_1200: "rgb(84, 4, 103)",
                  Magenta_1300: "rgb(60, 2, 74)",
                  Magenta_1400: "rgb(35, 4, 42)",
                },
                Pink: {
                  Pink_100: "rgb(255, 230, 242)",
                  Pink_200: "rgb(254, 220, 236)",
                  Pink_300: "rgb(250, 202, 224)",
                  Pink_400: "rgb(247, 173, 207)",
                  Pink_500: "rgb(243, 143, 184)",
                  Pink_600: "rgb(238, 114, 161)",
                  Pink_700: "rgb(231, 78, 144)",
                  Pink_800: "rgb(205, 55, 123)",
                  Pink_900: "rgb(180, 43, 106)",
                  Pink_1000: "rgb(153, 29, 88)",
                  Pink_1100: "rgb(99, 3, 53)",
                  Pink_1200: "rgb(99, 3, 53)",
                  Pink_1300: "rgb(70, 4, 36)",
                  Pink_1400: "rgb(43, 2, 21)",
                },
                Gray: {
                  Gray_100: "rgb(242, 244, 245)",
                  Gray_200: "rgb(232, 235, 236)",
                  Gray_300: "rgb(222, 225, 227)",
                  Gray_400: "rgb(199, 203, 206)",
                  Gray_500: "rgb(189, 190, 190)",
                  Gray_600: "rgb(145, 146, 147)",
                  Gray_700: "rgb(101, 102, 104)",
                  Gray_800: "rgb(96, 97, 98)",
                  Gray_900: "rgb(57, 59, 61)",
                  Gray_1000: "rgb(35, 37, 39)",
                  Gray_1100: "rgb(25, 27, 29)",
                  Gray_1200: "rgb(17, 18, 20)",
                },
              },
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(35, 37, 39)",
                Surface_100: "rgb(25, 27, 29)",
                Surface_200: "rgb(17, 18, 20)",
                Surface_300: "rgb(57, 59, 61)",
              },
              OverMedia: {
                OverMedia_0: "rgba(0, 0, 0, 0.7)",
                OverMedia_100: "rgba(17, 18, 20, 0.7)",
                OverMedia_200: "rgba(25, 27, 29, 0.7)",
                OverMedia_300: "rgba(57, 59, 61, 0.7)",
              },
              Shift: {
                Shift_100: "rgba(17, 18, 20, 0.8)",
                Shift_200: "rgb(101, 102, 104)",
                Shift_300: "rgba(255, 255, 255, 0.2)",
                Shift_400: "rgba(255, 255, 255, 0.3)",
              },
              Content: {
                Emphasis: "rgb(255, 255, 255)",
                Default: "rgb(189, 190, 190)",
                Muted: "rgba(255, 255, 255, 0.7)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(255, 255, 255, 0.2)",
                Default: "rgba(255, 255, 255, 0.15)",
                Muted: "rgba(255, 255, 255, 0.1)",
              },
              System: {
                Contrast: "rgb(255, 255, 255)",
                Neutral: "rgb(189, 190, 190)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(57, 59, 61, 0.5)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(25, 27, 29)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgb(101, 102, 104)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.1)",
                Press: "rgba(0, 0, 0, 0.3)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(255, 255, 255, 0.2)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgb(255, 255, 255)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Config: {
              Theme: {
                Name: "UIBlox",
                IsFoundation: "false",
                IsUIBlox: "true",
              },
              ColorMode: { Name: "Dark", IsDark: "true", IsLight: "false" },
              UI: { Interval: 4, Scale: 1, StrokeBase: 1 },
              Text: {
                Interval: 4,
                Scale: 1,
                Font: '"Builder Sans"',
                NominalScale: 1,
                InverseScale: 1,
              },
            },
            DarkMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(35, 37, 39)",
                Surface_100: "rgb(25, 27, 29)",
                Surface_200: "rgb(17, 18, 20)",
                Surface_300: "rgb(57, 59, 61)",
              },
              OverMedia: {
                OverMedia_0: "rgba(0, 0, 0, 0.7)",
                OverMedia_100: "rgba(17, 18, 20, 0.7)",
                OverMedia_200: "rgba(25, 27, 29, 0.7)",
                OverMedia_300: "rgba(57, 59, 61, 0.7)",
              },
              Shift: {
                Shift_100: "rgba(17, 18, 20, 0.8)",
                Shift_200: "rgb(101, 102, 104)",
                Shift_300: "rgba(255, 255, 255, 0.2)",
                Shift_400: "rgba(255, 255, 255, 0.3)",
              },
              Content: {
                Emphasis: "rgb(255, 255, 255)",
                Default: "rgb(189, 190, 190)",
                Muted: "rgba(255, 255, 255, 0.7)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(255, 255, 255, 0.2)",
                Default: "rgba(255, 255, 255, 0.15)",
                Muted: "rgba(255, 255, 255, 0.1)",
              },
              System: {
                Contrast: "rgb(255, 255, 255)",
                Neutral: "rgb(189, 190, 190)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(57, 59, 61, 0.5)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(25, 27, 29)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgb(101, 102, 104)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.1)",
                Press: "rgba(0, 0, 0, 0.3)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(255, 255, 255, 0.2)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgb(255, 255, 255)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            LightMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(242, 244, 245)",
                Surface_100: "rgb(222, 225, 227)",
                Surface_200: "rgb(199, 203, 206)",
                Surface_300: "rgb(255, 255, 255)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.9)",
                OverMedia_100: "rgba(222, 225, 227, 0.9)",
                OverMedia_200: "rgba(255, 255, 255, 0.9)",
                OverMedia_300: "rgba(222, 225, 227, 0.9)",
              },
              Shift: {
                Shift_100: "rgba(0, 0, 0, 0.1)",
                Shift_200: "rgb(189, 190, 190)",
                Shift_300: "rgba(0, 0, 0, 0.2)",
                Shift_400: "rgba(0, 0, 0, 0.3)",
              },
              Content: {
                Emphasis: "rgb(57, 59, 61)",
                Default: "rgb(96, 97, 98)",
                Muted: "rgba(0, 0, 0, 0.6)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(57, 59, 61, 0.2)",
                Default: "rgba(57, 59, 61, 0.15)",
                Muted: "rgba(57, 59, 61, 0.1)",
              },
              System: {
                Contrast: "rgb(57, 59, 61)",
                Neutral: "rgb(96, 97, 98)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(0, 0, 0, 0.1)",
                Scrim: "rgba(0, 0, 0, 0.3)",
                Shadow: "rgba(0, 0, 0, 0.3)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(0, 0, 0, 0.1)",
              },
              Selection: {
                Start: "rgb(189, 190, 190)",
                End: "rgb(189, 190, 190)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.1)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(0, 0, 0, 0.2)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgb(96, 97, 98)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Inverse: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(242, 244, 245)",
                Surface_100: "rgb(222, 225, 227)",
                Surface_200: "rgb(199, 203, 206)",
                Surface_300: "rgb(255, 255, 255)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.9)",
                OverMedia_100: "rgba(222, 225, 227, 0.9)",
                OverMedia_200: "rgba(255, 255, 255, 0.9)",
                OverMedia_300: "rgba(222, 225, 227, 0.9)",
              },
              Shift: {
                Shift_100: "rgba(0, 0, 0, 0.1)",
                Shift_200: "rgb(189, 190, 190)",
                Shift_300: "rgba(0, 0, 0, 0.2)",
                Shift_400: "rgba(0, 0, 0, 0.3)",
              },
              Content: {
                Emphasis: "rgb(57, 59, 61)",
                Default: "rgb(96, 97, 98)",
                Muted: "rgba(0, 0, 0, 0.6)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(57, 59, 61, 0.2)",
                Default: "rgba(57, 59, 61, 0.15)",
                Muted: "rgba(57, 59, 61, 0.1)",
              },
              System: {
                Contrast: "rgb(57, 59, 61)",
                Neutral: "rgb(96, 97, 98)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(0, 0, 0, 0.1)",
                Scrim: "rgba(0, 0, 0, 0.3)",
                Shadow: "rgba(0, 0, 0, 0.3)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(0, 0, 0, 0.1)",
              },
              Selection: {
                Start: "rgb(189, 190, 190)",
                End: "rgb(189, 190, 190)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.1)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(0, 0, 0, 0.2)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgb(96, 97, 98)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Size: {
              Size_0: 0,
              Size_50: 2,
              Size_100: 4,
              Size_150: 6,
              Size_200: 8,
              Size_250: 10,
              Size_300: 12,
              Size_350: 14,
              Size_400: 16,
              Size_500: 20,
              Size_600: 24,
              Size_700: 28,
              Size_800: 32,
              Size_900: 36,
              Size_1000: 40,
              Size_1100: 44,
              Size_1200: 48,
              Size_1300: 52,
              Size_1400: 56,
              Size_1500: 60,
              Size_1600: 64,
              Size_1700: 68,
              Size_1800: 72,
              Size_1900: 76,
              Size_2000: 80,
              Size_2100: 84,
              Size_2200: 88,
              Size_2300: 92,
              Size_2400: 96,
              Size_2500: 100,
              Size_2600: 104,
              Size_2700: 108,
              Size_2800: 112,
              Size_2900: 116,
              Size_3000: 120,
            },
            Padding: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Margin: { None: 0, Small: 20, Medium: 24, Large: 48 },
            Gap: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Gutter: {
              None: 0,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Radius: {
              None: 0,
              XSmall: 2,
              Small: 4,
              Medium: 8,
              Large: 16,
              Circle: 9999,
            },
            Stroke: { None: 0, Thin: 0.5, Standard: 1, Thick: 1.5, Thicker: 3 },
            LineHeight: {
              LineHeight_100: 1,
              LineHeight_120: 1.2,
              LineHeight_130: 1.3,
              LineHeight_140: 1.4,
            },
            LetterSpacing: { Tight: -0.01, Default: 0, Loose: 0.01 },
            FontSize: {
              FontSize_200: 8,
              FontSize_250: 10,
              FontSize_300: 12,
              FontSize_350: 14,
              FontSize_400: 16,
              FontSize_500: 20,
              FontSize_600: 24,
              FontSize_700: 28,
              FontSize_800: 32,
              FontSize_900: 36,
              FontSize_1000: 40,
              FontSize_1100: 44,
              FontSize_1200: 48,
              FontSize_1300: 52,
              FontSize_1400: 56,
              FontSize_1500: 60,
              FontSize_1600: 64,
              FontSize_1700: 68,
              FontSize_1800: 72,
              FontSize_1900: 76,
              FontSize_2000: 80,
              FontSize_2100: 84,
              FontSize_2200: 88,
              FontSize_2300: 92,
              FontSize_2400: 96,
              FontSize_2500: 100,
              FontSize_2600: 104,
              FontSize_2700: 108,
              FontSize_2800: 112,
              FontSize_2900: 116,
              FontSize_3000: 120,
            },
            FontWeight: {
              FontWeight_300: "300",
              FontWeight_400: "400",
              FontWeight_500: "500",
              FontWeight_600: "600",
              FontWeight_700: "700",
              FontWeight_800: "800",
            },
            Typography: {
              DisplayLarge: {
                Font: '700 80/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 80,
                LineHeight: 1.2,
              },
              DisplayMedium: {
                Font: '700 56/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 56,
                LineHeight: 1.2,
              },
              DisplaySmall: {
                Font: '700 40/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 40,
                LineHeight: 1.2,
              },
              HeadingLarge: {
                Font: '700 28/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 28,
                LineHeight: 1.2,
              },
              HeadingMedium: {
                Font: '700 24/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 24,
                LineHeight: 1.2,
              },
              HeadingSmall: {
                Font: '700 20/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 20,
                LineHeight: 1.2,
              },
              TitleLarge: {
                Font: '700 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 16,
                LineHeight: 1.4,
              },
              TitleMedium: {
                Font: '700 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 14,
                LineHeight: 1.4,
              },
              TitleSmall: {
                Font: '700 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 12,
                LineHeight: 1.4,
              },
              LabelLarge: {
                Font: '600 16/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 16,
                LineHeight: 1,
              },
              LabelMedium: {
                Font: '600 14/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1,
              },
              LabelSmall: {
                Font: '600 12/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1,
              },
              BodyLarge: {
                Font: '400 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 16,
                LineHeight: 1.4,
              },
              BodyMedium: {
                Font: '400 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 14,
                LineHeight: 1.4,
              },
              BodySmall: {
                Font: '400 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionLarge: {
                Font: '600 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1.4,
              },
              CaptionMedium: {
                Font: '600 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionSmall: {
                Font: '600 10/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 10,
                LineHeight: 1.4,
              },
            },
            Time: {
              Time_50: 0.05,
              Time_100: 0.1,
              Time_200: 0.2,
              Time_300: 0.3,
              Time_400: 0.4,
              Time_500: 0.5,
              Time_600: 0.6,
              Time_700: 0.7,
              Time_800: 0.8,
              Time_900: 0.9,
              Time_1000: 1,
            },
            Ease: {
              StandardIn: {
                Bezier: "cubic-bezier(0.8, 0, 0.4, 1)",
                Raw: [0.8, 0, 0.4, 1],
              },
              StandardOut: {
                Bezier: "cubic-bezier(0.2, 0, 0, 1)",
                Raw: [0.2, 0, 0, 1],
              },
              ExpressiveIn: {
                Bezier: "cubic-bezier(0.25, 0, 0.5, -1)",
                Raw: [0.25, 0, 0.5, -1],
              },
              ExpressiveOut: {
                Bezier: "cubic-bezier(0.25, 1.5, 0.5, 1)",
                Raw: [0.25, 1.5, 0.5, 1],
              },
              Linear: { Bezier: "cubic-bezier(0, 0, 1, 1)", Raw: [0, 0, 1, 1] },
            },
          });
      },
      928: function (r, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.UIBloxLight = void 0),
          (e.UIBloxLight = {
            Color: {
              Extended: {
                Black: {
                  Black_0: "rgba(0, 0, 0, 0)",
                  Black_03: "rgba(0, 0, 0, 0.03)",
                  Black_05: "rgba(0, 0, 0, 0.05)",
                  Black_10: "rgba(0, 0, 0, 0.1)",
                  Black_15: "rgba(0, 0, 0, 0.15)",
                  Black_20: "rgba(0, 0, 0, 0.2)",
                  Black_30: "rgba(0, 0, 0, 0.3)",
                  Black_40: "rgba(0, 0, 0, 0.4)",
                  Black_50: "rgba(0, 0, 0, 0.5)",
                  Black_60: "rgba(0, 0, 0, 0.6)",
                  Black_70: "rgba(0, 0, 0, 0.7)",
                  Black_80: "rgba(0, 0, 0, 0.8)",
                  Black_85: "rgba(0, 0, 0, 0.85)",
                  Black_90: "rgba(0, 0, 0, 0.9)",
                  Black_95: "rgba(0, 0, 0, 0.95)",
                  Black_97: "rgba(0, 0, 0, 0.97)",
                  Black_100: "rgb(0, 0, 0)",
                },
                White: {
                  White_0: "rgba(255, 255, 255, 0)",
                  White_03: "rgba(255, 255, 255, 0.03)",
                  White_05: "rgba(255, 255, 255, 0.05)",
                  White_10: "rgba(255, 255, 255, 0.1)",
                  White_15: "rgba(255, 255, 255, 0.15)",
                  White_20: "rgba(255, 255, 255, 0.2)",
                  White_30: "rgba(255, 255, 255, 0.3)",
                  White_40: "rgba(255, 255, 255, 0.4)",
                  White_50: "rgba(255, 255, 255, 0.5)",
                  White_60: "rgba(255, 255, 255, 0.6)",
                  White_70: "rgba(255, 255, 255, 0.7)",
                  White_80: "rgba(255, 255, 255, 0.8)",
                  White_85: "rgba(255, 255, 255, 0.85)",
                  White_90: "rgba(255, 255, 255, 0.9)",
                  White_95: "rgba(255, 255, 255, 0.95)",
                  White_97: "rgba(255, 255, 255, 0.97)",
                  White_100: "rgb(255, 255, 255)",
                },
                Red: {
                  Red_100: "rgb(255, 234, 233)",
                  Red_200: "rgb(255, 223, 222)",
                  Red_300: "rgb(247, 205, 203)",
                  Red_400: "rgb(243, 178, 174)",
                  Red_500: "rgb(238, 151, 145)",
                  Red_600: "rgb(235, 121, 115)",
                  Red_700: "rgb(231, 87, 80)",
                  Red_800: "rgb(223, 40, 31)",
                  Red_900: "rgb(197, 18, 10)",
                  Red_1000: "rgb(164, 17, 9)",
                  Red_1100: "rgb(131, 15, 7)",
                  Red_1200: "rgb(100, 12, 5)",
                  Red_1300: "rgb(71, 8, 4)",
                  Red_1400: "rgb(40, 6, 3)",
                },
                Orange: {
                  Orange_100: "rgb(253, 232, 216)",
                  Orange_200: "rgb(252, 222, 199)",
                  Orange_300: "rgb(251, 206, 174)",
                  Orange_400: "rgb(251, 178, 134)",
                  Orange_500: "rgb(250, 148, 90)",
                  Orange_600: "rgb(245, 118, 48)",
                  Orange_700: "rgb(220, 100, 35)",
                  Orange_800: "rgb(192, 80, 20)",
                  Orange_900: "rgb(169, 67, 11)",
                  Orange_1000: "rgb(144, 51, 0)",
                  Orange_1100: "rgb(115, 40, 0)",
                  Orange_1200: "rgb(87, 30, 0)",
                  Orange_1300: "rgb(60, 21, 0)",
                  Orange_1400: "rgb(33, 13, 1)",
                },
                Yellow: {
                  Yellow_100: "rgb(253, 236, 193)",
                  Yellow_200: "rgb(250, 228, 170)",
                  Yellow_300: "rgb(247, 210, 115)",
                  Yellow_400: "rgb(242, 186, 42)",
                  Yellow_500: "rgb(219, 166, 31)",
                  Yellow_600: "rgb(196, 147, 21)",
                  Yellow_700: "rgb(174, 128, 11)",
                  Yellow_800: "rgb(151, 108, 0)",
                  Yellow_900: "rgb(129, 93, 0)",
                  Yellow_1000: "rgb(107, 76, 0)",
                  Yellow_1100: "rgb(83, 61, 2)",
                  Yellow_1200: "rgb(63, 45, 1)",
                  Yellow_1300: "rgb(44, 31, 0)",
                  Yellow_1400: "rgb(24, 17, 0)",
                },
                Green: {
                  Green_100: "rgb(208, 251, 227)",
                  Green_200: "rgb(176, 246, 208)",
                  Green_300: "rgb(142, 233, 182)",
                  Green_400: "rgb(101, 215, 157)",
                  Green_500: "rgb(57, 197, 130)",
                  Green_600: "rgb(29, 177, 106)",
                  Green_700: "rgb(12, 155, 90)",
                  Green_800: "rgb(1, 133, 75)",
                  Green_900: "rgb(2, 114, 64)",
                  Green_1000: "rgb(1, 95, 53)",
                  Green_1100: "rgb(0, 74, 41)",
                  Green_1200: "rgb(1, 56, 31)",
                  Green_1300: "rgb(10, 38, 18)",
                  Green_1400: "rgb(0, 22, 12)",
                },
                Turquoise: {
                  Turquoise_100: "rgb(200, 246, 255)",
                  Turquoise_200: "rgb(163, 239, 254)",
                  Turquoise_300: "rgb(126, 229, 248)",
                  Turquoise_400: "rgb(92, 210, 232)",
                  Turquoise_500: "rgb(57, 189, 216)",
                  Turquoise_600: "rgb(22, 169, 199)",
                  Turquoise_700: "rgb(4, 148, 178)",
                  Turquoise_800: "rgb(18, 125, 152)",
                  Turquoise_900: "rgb(5, 108, 130)",
                  Turquoise_1000: "rgb(5, 90, 106)",
                  Turquoise_1100: "rgb(4, 71, 84)",
                  Turquoise_1200: "rgb(2, 53, 63)",
                  Turquoise_1300: "rgb(2, 37, 44)",
                  Turquoise_1400: "rgb(2, 20, 24)",
                },
                Blue: {
                  Blue_100: "rgb(235, 241, 255)",
                  Blue_200: "rgb(204, 221, 255)",
                  Blue_300: "rgb(173, 201, 255)",
                  Blue_400: "rgb(143, 180, 255)",
                  Blue_500: "rgb(112, 160, 255)",
                  Blue_600: "rgb(82, 139, 255)",
                  Blue_700: "rgb(51, 95, 255)",
                  Blue_800: "rgb(20, 70, 255)",
                  Blue_900: "rgb(0, 53, 245)",
                  Blue_1000: "rgb(0, 45, 214)",
                  Blue_1100: "rgb(0, 39, 184)",
                  Blue_1200: "rgb(0, 34, 153)",
                  Blue_1300: "rgb(0, 27, 122)",
                  Blue_1400: "rgb(0, 20, 92)",
                },
                Purple: {
                  Purple_100: "rgb(241, 231, 255)",
                  Purple_200: "rgb(233, 222, 251)",
                  Purple_300: "rgb(226, 206, 253)",
                  Purple_400: "rgb(212, 181, 252)",
                  Purple_500: "rgb(197, 156, 249)",
                  Purple_600: "rgb(182, 130, 247)",
                  Purple_700: "rgb(167, 102, 245)",
                  Purple_800: "rgb(147, 72, 240)",
                  Purple_900: "rgb(130, 46, 231)",
                  Purple_1000: "rgb(108, 33, 198)",
                  Purple_1100: "rgb(86, 20, 165)",
                  Purple_1200: "rgb(65, 8, 134)",
                  Purple_1300: "rgb(45, 4, 96)",
                  Purple_1400: "rgb(28, 2, 59)",
                },
                Magenta: {
                  Magenta_100: "rgb(253, 232, 249)",
                  Magenta_200: "rgb(253, 221, 253)",
                  Magenta_300: "rgb(245, 200, 252)",
                  Magenta_400: "rgb(239, 170, 250)",
                  Magenta_500: "rgb(232, 139, 248)",
                  Magenta_600: "rgb(223, 106, 247)",
                  Magenta_700: "rgb(213, 64, 245)",
                  Magenta_800: "rgb(192, 10, 232)",
                  Magenta_900: "rgb(165, 14, 200)",
                  Magenta_1000: "rgb(138, 12, 167)",
                  Magenta_1100: "rgb(110, 7, 133)",
                  Magenta_1200: "rgb(84, 4, 103)",
                  Magenta_1300: "rgb(60, 2, 74)",
                  Magenta_1400: "rgb(35, 4, 42)",
                },
                Pink: {
                  Pink_100: "rgb(255, 230, 242)",
                  Pink_200: "rgb(254, 220, 236)",
                  Pink_300: "rgb(250, 202, 224)",
                  Pink_400: "rgb(247, 173, 207)",
                  Pink_500: "rgb(243, 143, 184)",
                  Pink_600: "rgb(238, 114, 161)",
                  Pink_700: "rgb(231, 78, 144)",
                  Pink_800: "rgb(205, 55, 123)",
                  Pink_900: "rgb(180, 43, 106)",
                  Pink_1000: "rgb(153, 29, 88)",
                  Pink_1100: "rgb(99, 3, 53)",
                  Pink_1200: "rgb(99, 3, 53)",
                  Pink_1300: "rgb(70, 4, 36)",
                  Pink_1400: "rgb(43, 2, 21)",
                },
                Gray: {
                  Gray_100: "rgb(242, 244, 245)",
                  Gray_200: "rgb(232, 235, 236)",
                  Gray_300: "rgb(222, 225, 227)",
                  Gray_400: "rgb(199, 203, 206)",
                  Gray_500: "rgb(189, 190, 190)",
                  Gray_600: "rgb(145, 146, 147)",
                  Gray_700: "rgb(101, 102, 104)",
                  Gray_800: "rgb(96, 97, 98)",
                  Gray_900: "rgb(57, 59, 61)",
                  Gray_1000: "rgb(35, 37, 39)",
                  Gray_1100: "rgb(25, 27, 29)",
                  Gray_1200: "rgb(17, 18, 20)",
                },
              },
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(242, 244, 245)",
                Surface_100: "rgb(222, 225, 227)",
                Surface_200: "rgb(199, 203, 206)",
                Surface_300: "rgb(255, 255, 255)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.9)",
                OverMedia_100: "rgba(222, 225, 227, 0.9)",
                OverMedia_200: "rgba(255, 255, 255, 0.9)",
                OverMedia_300: "rgba(222, 225, 227, 0.9)",
              },
              Shift: {
                Shift_100: "rgba(0, 0, 0, 0.1)",
                Shift_200: "rgb(189, 190, 190)",
                Shift_300: "rgba(0, 0, 0, 0.2)",
                Shift_400: "rgba(0, 0, 0, 0.3)",
              },
              Content: {
                Emphasis: "rgb(57, 59, 61)",
                Default: "rgb(96, 97, 98)",
                Muted: "rgba(0, 0, 0, 0.6)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(57, 59, 61, 0.2)",
                Default: "rgba(57, 59, 61, 0.15)",
                Muted: "rgba(57, 59, 61, 0.1)",
              },
              System: {
                Contrast: "rgb(57, 59, 61)",
                Neutral: "rgb(96, 97, 98)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(0, 0, 0, 0.1)",
                Scrim: "rgba(0, 0, 0, 0.3)",
                Shadow: "rgba(0, 0, 0, 0.3)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(0, 0, 0, 0.1)",
              },
              Selection: {
                Start: "rgb(189, 190, 190)",
                End: "rgb(189, 190, 190)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.1)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(0, 0, 0, 0.2)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgb(96, 97, 98)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Config: {
              Theme: {
                Name: "UIBlox",
                IsFoundation: "false",
                IsUIBlox: "true",
              },
              ColorMode: { Name: "Light", IsDark: "false", IsLight: "true" },
              UI: { Interval: 4, Scale: 1, StrokeBase: 1 },
              Text: {
                Interval: 4,
                Scale: 1,
                Font: '"Builder Sans"',
                NominalScale: 1,
                InverseScale: 1,
              },
            },
            DarkMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(35, 37, 39)",
                Surface_100: "rgb(25, 27, 29)",
                Surface_200: "rgb(17, 18, 20)",
                Surface_300: "rgb(57, 59, 61)",
              },
              OverMedia: {
                OverMedia_0: "rgba(0, 0, 0, 0.7)",
                OverMedia_100: "rgba(17, 18, 20, 0.7)",
                OverMedia_200: "rgba(25, 27, 29, 0.7)",
                OverMedia_300: "rgba(57, 59, 61, 0.7)",
              },
              Shift: {
                Shift_100: "rgba(17, 18, 20, 0.8)",
                Shift_200: "rgb(101, 102, 104)",
                Shift_300: "rgba(255, 255, 255, 0.2)",
                Shift_400: "rgba(255, 255, 255, 0.3)",
              },
              Content: {
                Emphasis: "rgb(255, 255, 255)",
                Default: "rgb(189, 190, 190)",
                Muted: "rgba(255, 255, 255, 0.7)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(255, 255, 255, 0.2)",
                Default: "rgba(255, 255, 255, 0.15)",
                Muted: "rgba(255, 255, 255, 0.1)",
              },
              System: {
                Contrast: "rgb(255, 255, 255)",
                Neutral: "rgb(189, 190, 190)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(57, 59, 61, 0.5)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(25, 27, 29)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgb(101, 102, 104)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.1)",
                Press: "rgba(0, 0, 0, 0.3)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(255, 255, 255, 0.2)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgb(255, 255, 255)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            LightMode: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(242, 244, 245)",
                Surface_100: "rgb(222, 225, 227)",
                Surface_200: "rgb(199, 203, 206)",
                Surface_300: "rgb(255, 255, 255)",
              },
              OverMedia: {
                OverMedia_0: "rgba(255, 255, 255, 0.9)",
                OverMedia_100: "rgba(222, 225, 227, 0.9)",
                OverMedia_200: "rgba(255, 255, 255, 0.9)",
                OverMedia_300: "rgba(222, 225, 227, 0.9)",
              },
              Shift: {
                Shift_100: "rgba(0, 0, 0, 0.1)",
                Shift_200: "rgb(189, 190, 190)",
                Shift_300: "rgba(0, 0, 0, 0.2)",
                Shift_400: "rgba(0, 0, 0, 0.3)",
              },
              Content: {
                Emphasis: "rgb(57, 59, 61)",
                Default: "rgb(96, 97, 98)",
                Muted: "rgba(0, 0, 0, 0.6)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(57, 59, 61, 0.2)",
                Default: "rgba(57, 59, 61, 0.15)",
                Muted: "rgba(57, 59, 61, 0.1)",
              },
              System: {
                Contrast: "rgb(57, 59, 61)",
                Neutral: "rgb(96, 97, 98)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(0, 0, 0, 0.1)",
                Scrim: "rgba(0, 0, 0, 0.3)",
                Shadow: "rgba(0, 0, 0, 0.3)",
                NavigationBar: "rgb(255, 255, 255)",
                HeavyDivider: "rgba(0, 0, 0, 0.1)",
              },
              Selection: {
                Start: "rgb(189, 190, 190)",
                End: "rgb(189, 190, 190)",
              },
              State: {
                Idle: "rgba(0, 0, 0, 0)",
                Hover: "rgba(0, 0, 0, 0.1)",
                Press: "rgba(0, 0, 0, 0.2)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(57, 59, 61)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(0, 0, 0, 0.2)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgb(96, 97, 98)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Inverse: {
              None: "rgba(0, 0, 0, 0)",
              Surface: {
                Surface_0: "rgb(35, 37, 39)",
                Surface_100: "rgb(25, 27, 29)",
                Surface_200: "rgb(17, 18, 20)",
                Surface_300: "rgb(57, 59, 61)",
              },
              OverMedia: {
                OverMedia_0: "rgba(0, 0, 0, 0.7)",
                OverMedia_100: "rgba(17, 18, 20, 0.7)",
                OverMedia_200: "rgba(25, 27, 29, 0.7)",
                OverMedia_300: "rgba(57, 59, 61, 0.7)",
              },
              Shift: {
                Shift_100: "rgba(17, 18, 20, 0.8)",
                Shift_200: "rgb(101, 102, 104)",
                Shift_300: "rgba(255, 255, 255, 0.2)",
                Shift_400: "rgba(255, 255, 255, 0.3)",
              },
              Content: {
                Emphasis: "rgb(255, 255, 255)",
                Default: "rgb(189, 190, 190)",
                Muted: "rgba(255, 255, 255, 0.7)",
                Link: "rgb(112, 160, 255)",
              },
              Stroke: {
                Emphasis: "rgba(255, 255, 255, 0.2)",
                Default: "rgba(255, 255, 255, 0.15)",
                Muted: "rgba(255, 255, 255, 0.1)",
              },
              System: {
                Contrast: "rgb(255, 255, 255)",
                Neutral: "rgb(189, 190, 190)",
                Emphasis: "rgb(0, 180, 109)",
                Success: "rgb(0, 180, 109)",
                Warning: "rgb(242, 186, 42)",
                Alert: "rgb(247, 75, 82)",
              },
              Common: {
                Shimmer: "rgba(57, 59, 61, 0.5)",
                Scrim: "rgba(0, 0, 0, 0.5)",
                Shadow: "rgba(0, 0, 0, 0.5)",
                NavigationBar: "rgb(25, 27, 29)",
                HeavyDivider: "rgba(0, 0, 0, 0.5)",
              },
              Selection: {
                Start: "rgb(255, 255, 255)",
                End: "rgb(101, 102, 104)",
              },
              State: {
                Idle: "rgba(255, 255, 255, 0)",
                Hover: "rgba(255, 255, 255, 0.1)",
                Press: "rgba(0, 0, 0, 0.3)",
              },
              ActionEmphasis: {
                Background: "rgb(0, 180, 109)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSoftEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubEmphasis: {
                Background: "rgb(255, 255, 255)",
                Foreground: "rgb(57, 59, 61)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionStandard: {
                Background: "rgba(255, 255, 255, 0.2)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionSubtle: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgb(255, 255, 255)",
              },
              ActionLink: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(255, 255, 255)",
                Border: "rgba(0, 0, 0, 0)",
              },
              ActionAlert: {
                Background: "rgba(0, 0, 0, 0)",
                Foreground: "rgb(247, 75, 82)",
                Border: "rgb(247, 75, 82)",
              },
            },
            Size: {
              Size_0: 0,
              Size_50: 2,
              Size_100: 4,
              Size_150: 6,
              Size_200: 8,
              Size_250: 10,
              Size_300: 12,
              Size_350: 14,
              Size_400: 16,
              Size_500: 20,
              Size_600: 24,
              Size_700: 28,
              Size_800: 32,
              Size_900: 36,
              Size_1000: 40,
              Size_1100: 44,
              Size_1200: 48,
              Size_1300: 52,
              Size_1400: 56,
              Size_1500: 60,
              Size_1600: 64,
              Size_1700: 68,
              Size_1800: 72,
              Size_1900: 76,
              Size_2000: 80,
              Size_2100: 84,
              Size_2200: 88,
              Size_2300: 92,
              Size_2400: 96,
              Size_2500: 100,
              Size_2600: 104,
              Size_2700: 108,
              Size_2800: 112,
              Size_2900: 116,
              Size_3000: 120,
            },
            Padding: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Margin: { None: 0, Small: 20, Medium: 24, Large: 48 },
            Gap: {
              None: 0,
              XXSmall: 2,
              XSmall: 4,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Gutter: {
              None: 0,
              Small: 8,
              Medium: 12,
              Large: 16,
              XLarge: 20,
              XXLarge: 24,
            },
            Radius: {
              None: 0,
              XSmall: 2,
              Small: 4,
              Medium: 8,
              Large: 16,
              Circle: 9999,
            },
            Stroke: { None: 0, Thin: 0.5, Standard: 1, Thick: 1.5, Thicker: 3 },
            LineHeight: {
              LineHeight_100: 1,
              LineHeight_120: 1.2,
              LineHeight_130: 1.3,
              LineHeight_140: 1.4,
            },
            LetterSpacing: { Tight: -0.01, Default: 0, Loose: 0.01 },
            FontSize: {
              FontSize_200: 8,
              FontSize_250: 10,
              FontSize_300: 12,
              FontSize_350: 14,
              FontSize_400: 16,
              FontSize_500: 20,
              FontSize_600: 24,
              FontSize_700: 28,
              FontSize_800: 32,
              FontSize_900: 36,
              FontSize_1000: 40,
              FontSize_1100: 44,
              FontSize_1200: 48,
              FontSize_1300: 52,
              FontSize_1400: 56,
              FontSize_1500: 60,
              FontSize_1600: 64,
              FontSize_1700: 68,
              FontSize_1800: 72,
              FontSize_1900: 76,
              FontSize_2000: 80,
              FontSize_2100: 84,
              FontSize_2200: 88,
              FontSize_2300: 92,
              FontSize_2400: 96,
              FontSize_2500: 100,
              FontSize_2600: 104,
              FontSize_2700: 108,
              FontSize_2800: 112,
              FontSize_2900: 116,
              FontSize_3000: 120,
            },
            FontWeight: {
              FontWeight_300: "300",
              FontWeight_400: "400",
              FontWeight_500: "500",
              FontWeight_600: "600",
              FontWeight_700: "700",
              FontWeight_800: "800",
            },
            Typography: {
              DisplayLarge: {
                Font: '700 80/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 80,
                LineHeight: 1.2,
              },
              DisplayMedium: {
                Font: '700 56/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 56,
                LineHeight: 1.2,
              },
              DisplaySmall: {
                Font: '700 40/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 40,
                LineHeight: 1.2,
              },
              HeadingLarge: {
                Font: '700 28/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 28,
                LineHeight: 1.2,
              },
              HeadingMedium: {
                Font: '700 24/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 24,
                LineHeight: 1.2,
              },
              HeadingSmall: {
                Font: '700 20/1.2 "Builder Sans"',
                LetterSpacing: -0.01,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 20,
                LineHeight: 1.2,
              },
              TitleLarge: {
                Font: '700 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 16,
                LineHeight: 1.4,
              },
              TitleMedium: {
                Font: '700 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 14,
                LineHeight: 1.4,
              },
              TitleSmall: {
                Font: '700 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "700",
                FontSize: 12,
                LineHeight: 1.4,
              },
              LabelLarge: {
                Font: '600 16/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 16,
                LineHeight: 1,
              },
              LabelMedium: {
                Font: '600 14/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1,
              },
              LabelSmall: {
                Font: '600 12/1 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1,
              },
              BodyLarge: {
                Font: '400 16/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 16,
                LineHeight: 1.4,
              },
              BodyMedium: {
                Font: '400 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 14,
                LineHeight: 1.4,
              },
              BodySmall: {
                Font: '400 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "400",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionLarge: {
                Font: '600 14/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 14,
                LineHeight: 1.4,
              },
              CaptionMedium: {
                Font: '600 12/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 12,
                LineHeight: 1.4,
              },
              CaptionSmall: {
                Font: '600 10/1.4 "Builder Sans"',
                LetterSpacing: 0,
                FontFamily: '"Builder Sans"',
                FontWeight: "600",
                FontSize: 10,
                LineHeight: 1.4,
              },
            },
            Time: {
              Time_50: 0.05,
              Time_100: 0.1,
              Time_200: 0.2,
              Time_300: 0.3,
              Time_400: 0.4,
              Time_500: 0.5,
              Time_600: 0.6,
              Time_700: 0.7,
              Time_800: 0.8,
              Time_900: 0.9,
              Time_1000: 1,
            },
            Ease: {
              StandardIn: {
                Bezier: "cubic-bezier(0.8, 0, 0.4, 1)",
                Raw: [0.8, 0, 0.4, 1],
              },
              StandardOut: {
                Bezier: "cubic-bezier(0.2, 0, 0, 1)",
                Raw: [0.2, 0, 0, 1],
              },
              ExpressiveIn: {
                Bezier: "cubic-bezier(0.25, 0, 0.5, -1)",
                Raw: [0.25, 0, 0.5, -1],
              },
              ExpressiveOut: {
                Bezier: "cubic-bezier(0.25, 1.5, 0.5, 1)",
                Raw: [0.25, 1.5, 0.5, 1],
              },
              Linear: { Bezier: "cubic-bezier(0, 0, 1, 1)", Raw: [0, 0, 1, 1] },
            },
          });
      },
      671: function (r) {
        function e(r) {
          return r && "undefined" != typeof Symbol && r.constructor === Symbol
            ? "symbol"
            : typeof r;
        }
        !(
          /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function () {
            "use strict";
            var t = {}.hasOwnProperty;
            function n() {
              for (var r = "", a = 0; a < arguments.length; a++) {
                var o = arguments[a];
                o &&
                  (r = i(
                    r,
                    (function (r) {
                      if ("string" == typeof r || "number" == typeof r)
                        return r;
                      if ((void 0 === r ? "undefined" : e(r)) !== "object")
                        return "";
                      if (Array.isArray(r)) return n.apply(null, r);
                      if (
                        r.toString !== Object.prototype.toString &&
                        !r.toString.toString().includes("[native code]")
                      )
                        return r.toString();
                      var a = "";
                      for (var o in r) t.call(r, o) && r[o] && (a = i(a, o));
                      return a;
                    })(o),
                  ));
              }
              return r;
            }
            function i(r, e) {
              return e ? (r ? r + " " + e : r + e) : r;
            }
            r.exports
              ? ((n.default = n), (r.exports = n))
              : "function" == typeof define &&
                  "object" === e(define.amd) &&
                  define.amd
                ? define("classnames", [], function () {
                    return n;
                  })
                : (window.classNames = n);
          })()
        );
      },
    },
    e = {};
  function t(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var a = (e[n] = { exports: {} });
    return r[n].call(a.exports, a, a.exports, t), a.exports;
  }
  (t.n = function (r) {
    var e =
      r && r.__esModule
        ? function () {
            return r.default;
          }
        : function () {
            return r;
          };
    return t.d(e, { a: e }), e;
  }),
    (t.d = function (r, e) {
      for (var n in e)
        t.o(e, n) &&
          !t.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
    }),
    (t.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    (t.r = function (r) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (t.rv = function () {
      return "1.2.8";
    }),
    (t.ruid = "bundler=rspack@1.2.8"),
    (function () {
      "use strict";
      var r = {};
      t.r(r),
        t.d(r, {
          TranslationProvider: function () {
            return p;
          },
          WebBloxProvider: function () {
            return Z;
          },
          makeActionCreator: function () {
            return R;
          },
          renderWithErrorBoundary: function () {
            return rK;
          },
          useDebounce: function () {
            return x;
          },
          useInterval: function () {
            return G;
          },
          useLocalStorage: function () {
            return N;
          },
          useOnClickOutside: function () {
            return Y;
          },
          usePrevious: function () {
            return X;
          },
          useTheme: function () {
            return J;
          },
          useTokens: function () {
            return re;
          },
          useTranslation: function () {
            return m;
          },
          useWindowActiveState: function () {
            return $;
          },
          withComponentStatus: function () {
            return D;
          },
          withTranslations: function () {
            return w;
          },
        });
      var e = {};
      function n(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      t.r(e),
        t.d(e, {
          TranslationProvider: function () {
            return p;
          },
          WebBloxProvider: function () {
            return Z;
          },
          makeActionCreator: function () {
            return R;
          },
          renderWithErrorBoundary: function () {
            return rK;
          },
          useDebounce: function () {
            return x;
          },
          useInterval: function () {
            return G;
          },
          useLocalStorage: function () {
            return N;
          },
          useOnClickOutside: function () {
            return Y;
          },
          usePrevious: function () {
            return X;
          },
          useTheme: function () {
            return J;
          },
          useTokens: function () {
            return re;
          },
          useTranslation: function () {
            return m;
          },
          useWindowActiveState: function () {
            return $;
          },
          withComponentStatus: function () {
            return D;
          },
          withTranslations: function () {
            return w;
          },
        });
      var i = function (r, e) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : window;
          if ("string" == typeof r) t[r] = e;
          else {
            var i =
                (function (r) {
                  if (Array.isArray(r)) return n(r);
                })(r) ||
                (function (r) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != r[Symbol.iterator]) ||
                    null != r["@@iterator"]
                  )
                    return Array.from(r);
                })(r) ||
                (function (r, e) {
                  if (r) {
                    if ("string" == typeof r) return n(r, void 0);
                    var t = Object.prototype.toString.call(r).slice(8, -1);
                    if (
                      ("Object" === t &&
                        r.constructor &&
                        (t = r.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    )
                      return n(r, e);
                  }
                })(r) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
              a = i.pop(),
              o = t,
              g = !0,
              u = !1,
              b = void 0;
            try {
              for (
                var c, l = i[Symbol.iterator]();
                !(g = (c = l.next()).done);
                g = !0
              ) {
                var s,
                  _,
                  d = c.value;
                (null !== (_ = (s = o)[d]) && void 0 !== _) || (s[d] = {}),
                  (o = o[d]);
              }
            } catch (r) {
              (u = !0), (b = r);
            } finally {
              try {
                g || null == l.return || l.return();
              } finally {
                if (u) throw b;
              }
            }
            o[a] = e;
          }
        },
        a = function (r, e) {
          i(r, e);
        },
        o = window.React,
        g = t.n(o),
        u = window.ReactJSX,
        b = window.Roblox["core-scripts"].intl.intl,
        c = t.n(b),
        l = window.Roblox["core-scripts"].intl.translation,
        s = window.RobloxError,
        _ = function (r) {
          var e = r.common,
            t = r.feature,
            n = r.features,
            i = {};
          return !Array.isArray(e) ||
            (void 0 !== t && void 0 !== n) ||
            (t && "string" != typeof t) ||
            (n &&
              !(
                Array.isArray(n) &&
                n.every(function (r) {
                  return "string" == typeof r;
                })
              ))
            ? (new s("Invalid namespaces config!").throw(), i)
            : Object.assign(i, {
                feature: t,
                features: n,
                common: e.filter(function (r) {
                  var e =
                    "string" != typeof r
                      ? (new s(
                          "Invalid namespace name, required a string",
                        ).throw(),
                        null)
                      : r.split(".");
                  return !!Array.isArray(e) && 2 === e.length;
                }),
              });
        };
      function d(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function S(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return d(r);
          })(r) ||
          (function (r) {
            if (
              ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r["@@iterator"]
            )
              return Array.from(r);
          })(r) ||
          (function (r, e) {
            if (r) {
              if ("string" == typeof r) return d(r, void 0);
              var t = Object.prototype.toString.call(r).slice(8, -1);
              if (
                ("Object" === t && r.constructor && (t = r.constructor.name),
                "Map" === t || "Set" === t)
              )
                return Array.from(t);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return d(r, e);
            }
          })(r) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var f = function (r) {
          var e = _(r),
            t = e.feature,
            n = e.common,
            i = e.features,
            a = new (c())(),
            o = new l.TranslationResourceProvider(a),
            g = S(n)
              .concat([t], S(null != i ? i : []))
              .filter(function (r) {
                return void 0 !== r;
              })
              .map(function (r) {
                return o.getTranslationResource(r);
              }),
            u = o.mergeTranslationResources.apply(o, S(g));
          return {
            translate: function (r, e) {
              return u.get(r, e);
            },
            intl: a,
          };
        },
        h = (0, o.createContext)(void 0);
      function p(r) {
        var e = r.config,
          t = r.children;
        return (0, u.jsx)(h.Provider, { value: f(e), children: t });
      }
      var m = function () {
        var r = (0, o.useContext)(h);
        if (!r)
          throw Error(
            "invalid use of `useTranslation` hook. Ensure your component has an ancestor wrapped in `TranslationProvider`",
          );
        return r;
      };
      function y(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      var v = function (r, e) {
          return ""
            .concat(e, "(")
            .concat(r.displayName || r.name || "Component", ")");
        },
        F = function (r) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "withHOC";
          return function (t) {
            for (
              var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              i[a - 1] = arguments[a];
            var o = r.apply(
              void 0,
              [t].concat(
                (function (r) {
                  if (Array.isArray(r)) return y(r);
                })(i) ||
                  (function (r) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != r[Symbol.iterator]) ||
                      null != r["@@iterator"]
                    )
                      return Array.from(r);
                  })(i) ||
                  (function (r, e) {
                    if (r) {
                      if ("string" == typeof r) return y(r, void 0);
                      var t = Object.prototype.toString.call(r).slice(8, -1);
                      if (
                        ("Object" === t &&
                          r.constructor &&
                          (t = r.constructor.name),
                        "Map" === t || "Set" === t)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      )
                        return y(r, e);
                    }
                  })(i) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })(),
              ),
            );
            return (o.displayName = v(t, e)), o;
          };
        };
      function B(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function k(r) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(r);
      }
      function z(r, e) {
        return (z =
          Object.setPrototypeOf ||
          function (r, e) {
            return (r.__proto__ = e), r;
          })(r, e);
      }
      function O(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return B(r);
          })(r) ||
          (function (r) {
            if (
              ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r["@@iterator"]
            )
              return Array.from(r);
          })(r) ||
          (function (r, e) {
            if (r) {
              if ("string" == typeof r) return B(r, void 0);
              var t = Object.prototype.toString.call(r).slice(8, -1);
              if (
                ("Object" === t && r.constructor && (t = r.constructor.name),
                "Map" === t || "Set" === t)
              )
                return Array.from(t);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return B(r, e);
            }
          })(r) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function L() {
        try {
          var r = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (r) {}
        return (L = function () {
          return !!r;
        })();
      }
      var w = F(function (r, e) {
          var t = _(e);
          return (function (e) {
            var n;
            function i(r) {
              (function (r, e) {
                if (!(r instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, i),
                (o = i),
                (g = [r]),
                (o = k(o)),
                (((e = this),
                (u =
                  (n = L()
                    ? Reflect.construct(o, g || [], k(this).constructor)
                    : o.apply(this, g)) &&
                  ("object" ==
                    ((a = n) &&
                    "undefined" != typeof Symbol &&
                    a.constructor === Symbol
                      ? "symbol"
                      : typeof a) ||
                    "function" == typeof n)
                    ? n
                    : (function (r) {
                        if (void 0 === r)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return r;
                      })(e))).intl = new (c())()),
                (u.translate = u.translate.bind(u));
              var e,
                n,
                a,
                o,
                g,
                u,
                b = t.common,
                s = t.feature,
                _ = t.features,
                d = new l.TranslationResourceProvider(u.intl),
                S = O(b)
                  .concat([s], O(null != _ ? _ : []))
                  .filter(function (r) {
                    return void 0 !== r;
                  })
                  .map(function (r) {
                    return d.getTranslationResource(r);
                  });
              return (
                (u.state = {
                  languageResources: d.mergeTranslationResources.apply(d, O(S)),
                }),
                u
              );
            }
            return (
              (function (r, e) {
                if ("function" != typeof e && null !== e)
                  throw TypeError(
                    "Super expression must either be null or a function",
                  );
                (r.prototype = Object.create(e && e.prototype, {
                  constructor: { value: r, writable: !0, configurable: !0 },
                })),
                  e && z(r, e);
              })(i, e),
              (n = [
                {
                  key: "translate",
                  value: function (r, e) {
                    return this.state.languageResources.get(r, e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e, t;
                    return (0, u.jsx)(
                      r,
                      ((e = (function (r) {
                        for (var e = 1; e < arguments.length; e++) {
                          var t = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(t);
                          "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                              Object.getOwnPropertySymbols(t).filter(
                                function (r) {
                                  return Object.getOwnPropertyDescriptor(t, r)
                                    .enumerable;
                                },
                              ),
                            )),
                            n.forEach(function (e) {
                              var n;
                              (n = t[e]),
                                e in r
                                  ? Object.defineProperty(r, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (r[e] = n);
                            });
                        }
                        return r;
                      })({}, this.props)),
                      (t = t = { translate: this.translate, intl: this.intl }),
                      Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t),
                          )
                        : (function (r, e) {
                            var t = Object.keys(r);
                            if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(r);
                              t.push.apply(t, n);
                            }
                            return t;
                          })(Object(t)).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r),
                            );
                          }),
                      e),
                    );
                  },
                },
              ]),
              (function (r, e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(r, n.key, n);
                }
              })(i.prototype, n),
              i
            );
          })(g().Component);
        }, "withTranslations"),
        E = window.PropTypes,
        M = t.n(E),
        P = t(671),
        A = t.n(P),
        T = function (r, e) {
          console.warn(
            "The following exception has been caught with the captured component stack:",
          ),
            console.group(),
            console.info("".concat(r)),
            console.info("".concat(e.componentStack)),
            console.groupEnd();
        };
      function W(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(r, n.key, n);
        }
      }
      function j(r) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(r);
      }
      function I(r, e) {
        return (I =
          Object.setPrototypeOf ||
          function (r, e) {
            return (r.__proto__ = e), r;
          })(r, e);
      }
      function C() {
        try {
          var r = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (r) {}
        return (C = function () {
          return !!r;
        })();
      }
      var D = F(function (r) {
        var e = (function (e) {
          var t, n;
          function i(r) {
            (function (r, e) {
              if (!(r instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, i),
              (a = i),
              (o = [r]),
              (a = j(a));
            var e,
              t,
              n,
              a,
              o,
              g,
              u = ((e = this),
              (g =
                (t = C()
                  ? Reflect.construct(a, o || [], j(this).constructor)
                  : a.apply(this, o)) &&
                ("object" ==
                  ((n = t) &&
                  "undefined" != typeof Symbol &&
                  n.constructor === Symbol
                    ? "symbol"
                    : typeof n) ||
                  "function" == typeof t)
                  ? t
                  : (function (r) {
                      if (void 0 === r)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return r;
                    })(e))).props.showAppOnInit;
            return (
              (g.state = { isLoading: !u, hasError: !1, errorState: null }),
              (g.onLoadStart = g.onLoadStart.bind(g)),
              (g.onLoadEnd = g.onLoadEnd.bind(g)),
              (g.onError = g.onError.bind(g)),
              g
            );
          }
          return (
            (function (r, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function",
                );
              (r.prototype = Object.create(e && e.prototype, {
                constructor: { value: r, writable: !0, configurable: !0 },
              })),
                e && I(r, e);
            })(i, e),
            (n = [
              {
                key: "getDerivedStateFromError",
                value: function () {
                  return { hasError: !0, errorState: null };
                },
              },
            ]),
            (t = [
              {
                key: "componentDidCatch",
                value: function (r, e) {
                  T(r, e);
                },
              },
              {
                key: "onLoadStart",
                value: function () {
                  this.setState({ isLoading: !0 });
                },
              },
              {
                key: "onLoadEnd",
                value: function () {
                  this.setState({ isLoading: !1 });
                },
              },
              {
                key: "onError",
                value: function (r) {
                  this.setState({ hasError: !0, errorState: r });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    a = this.props,
                    o = (a.showAppOnInit, a.defaultMessage),
                    g = a.errorStates,
                    b = (function (r, e) {
                      if (null == r) return {};
                      var t,
                        n,
                        i = (function (r, e) {
                          if (null == r) return {};
                          var t,
                            n,
                            i = {},
                            a = Object.keys(r);
                          for (n = 0; n < a.length; n++)
                            (t = a[n]), e.indexOf(t) >= 0 || (i[t] = r[t]);
                          return i;
                        })(r, e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(r);
                        for (n = 0; n < a.length; n++)
                          (t = a[n]),
                            !(e.indexOf(t) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                r,
                                t,
                              ) &&
                              (i[t] = r[t]);
                      }
                      return i;
                    })(a, ["showAppOnInit", "defaultMessage", "errorStates"]),
                    c = this.state,
                    l = c.isLoading,
                    s = c.hasError,
                    _ = c.errorState;
                  s
                    ? (n = (0, u.jsx)("h3", { children: g[_] ? g[_] : o }))
                    : ((n = (0, u.jsx)("span", {
                        className: "spinner spinner-default",
                      })),
                      (i = (0, u.jsx)(
                        r,
                        ((e = (function (r) {
                          for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                              n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                              (n = n.concat(
                                Object.getOwnPropertySymbols(t).filter(
                                  function (r) {
                                    return Object.getOwnPropertyDescriptor(t, r)
                                      .enumerable;
                                  },
                                ),
                              )),
                              n.forEach(function (e) {
                                var n;
                                (n = t[e]),
                                  e in r
                                    ? Object.defineProperty(r, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (r[e] = n);
                              });
                          }
                          return r;
                        })({}, b)),
                        (t = t =
                          {
                            isLoading: l,
                            hasError: s,
                            errorState: _,
                            onLoadStart: this.onLoadStart,
                            onLoadEnd: this.onLoadEnd,
                            onError: this.onError,
                          }),
                        Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t),
                            )
                          : (function (r, e) {
                              var t = Object.keys(r);
                              if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(r);
                                t.push.apply(t, n);
                              }
                              return t;
                            })(Object(t)).forEach(function (r) {
                              Object.defineProperty(
                                e,
                                r,
                                Object.getOwnPropertyDescriptor(t, r),
                              );
                            }),
                        e),
                      )));
                  var d = s || l,
                    S = A()("component-status-container", { hidden: !d }),
                    f = A()("component-container", { hidden: d });
                  return (0, u.jsxs)("div", {
                    className: "component-status",
                    children: [
                      (0, u.jsx)("div", { className: S, children: n }),
                      (0, u.jsx)("div", { className: f, children: i }),
                    ],
                  });
                },
              },
            ]),
            W(i.prototype, t),
            n && W(i, n),
            i
          );
        })(g().Component);
        return (
          (e.defaultProps = {
            showAppOnInit: !1,
            defaultMessage: "",
            errorStates: {},
          }),
          (e.propTypes = {
            showAppOnInit: M().bool,
            defaultMessage: M().string,
            errorStates: M().objectOf(M().string),
          }),
          e
        );
      }, "withComponentStatus");
      function H(r, e, t) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = t),
          r
        );
      }
      function R(r) {
        for (
          var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          t[n - 1] = arguments[n];
        return function () {
          for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
            n[i] = arguments[i];
          return (function (r) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (r) {
                    return Object.getOwnPropertyDescriptor(t, r).enumerable;
                  }),
                )),
                n.forEach(function (e) {
                  H(r, e, t[e]);
                });
            }
            return r;
          })(
            { type: r },
            t.reduce(function (r, e, t) {
              return Object.assign(r, H({}, e, n[t]));
            }, {}),
          );
        };
      }
      var x = function (r, e) {
          var t = (0, o.useState)(r),
            n = t[0],
            i = t[1];
          return (
            (0, o.useEffect)(
              function () {
                var t = setTimeout(function () {
                  i(r);
                }, e);
                return function () {
                  clearTimeout(t);
                };
              },
              [r, e],
            ),
            n
          );
        },
        G = function (r, e) {
          var t = (0, o.useRef)(r);
          (0, o.useEffect)(
            function () {
              t.current = r;
            },
            [r],
          ),
            (0, o.useEffect)(
              function () {
                if (null !== e) {
                  var r = setInterval(function () {
                    return t.current();
                  }, e);
                  return function () {
                    clearInterval(r);
                  };
                }
              },
              [e],
            );
        },
        N = function (r, e) {
          var t = function () {
              if ("undefined" == typeof window) return e;
              try {
                var t = window.localStorage.getItem(r);
                return t ? JSON.parse(t) : e;
              } catch (t) {
                return (
                  console.warn(
                    "Error reading localStorage key “" + r + "”:",
                    t,
                  ),
                  e
                );
              }
            },
            n = (0, o.useState)(t),
            i = n[0],
            a = n[1],
            g = (0, o.useCallback)(
              function (e) {
                "undefined" == typeof window &&
                  console.warn(
                    "Tried setting localStorage key “" +
                      r +
                      "” even though environment is not a client",
                  );
                try {
                  var t = e instanceof Function ? e(i) : e;
                  window.localStorage.setItem(r, JSON.stringify(t)),
                    a(t),
                    window.dispatchEvent(new Event("local-storage"));
                } catch (e) {
                  console.warn(
                    "Error setting localStorage key “" + r + "”:",
                    e,
                  );
                }
              },
              [r, i],
            );
          return (
            (0, o.useEffect)(function () {
              a(t());
            }, []),
            (0, o.useEffect)(function () {
              var r = function () {
                a(t());
              };
              return (
                window.addEventListener("storage", r),
                window.addEventListener("local-storage", r),
                function () {
                  window.removeEventListener("storage", r),
                    window.removeEventListener("local-storage", r);
                }
              );
            }, []),
            [i, g]
          );
        },
        Y = function (r, e) {
          (0, o.useEffect)(
            function () {
              var t = function (t) {
                !(
                  r.every(function (r) {
                    return !(null == r ? void 0 : r.current);
                  }) ||
                  r.findIndex(function (r) {
                    var e;
                    return (
                      t.target instanceof Node &&
                      (null === (e = null == r ? void 0 : r.current) ||
                      void 0 === e
                        ? void 0
                        : e.contains(t.target))
                    );
                  }) > -1
                ) && e(t);
              };
              return (
                document.addEventListener("mousedown", t),
                document.addEventListener("touchstart", t),
                function () {
                  document.removeEventListener("mousedown", t),
                    document.removeEventListener("touchstart", t);
                }
              );
            },
            [r, e],
          );
        },
        X = function (r) {
          var e = (0, o.useRef)();
          return (
            (0, o.useEffect)(
              function () {
                e.current = r;
              },
              [r],
            ),
            e.current
          );
        },
        q = [
          "focus",
          "click",
          "hover",
          "scroll",
          "mouseover",
          "mouseenter",
          "mousedown",
          "dblclick",
          "keypress",
          "touchstart",
          "touchmove",
        ],
        U = ["blur"],
        $ = function () {
          var r = (0, o.useState)(!1),
            e = r[0],
            t = r[1],
            n = (0, o.useCallback)(function () {
              t(!0);
            }, []),
            i = (0, o.useCallback)(function () {
              t(!1);
            }, []);
          return (
            (0, o.useEffect)(
              function () {
                return (
                  q.forEach(function (r) {
                    window.addEventListener(r, n);
                  }),
                  U.forEach(function (r) {
                    window.addEventListener(r, i);
                  }),
                  function () {
                    q.forEach(function (r) {
                      window.removeEventListener(r, n);
                    }),
                      U.forEach(function (r) {
                        window.removeEventListener(r, i);
                      });
                  }
                );
              },
              [n, i],
            ),
            e
          );
        };
      function K(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      var J = function () {
          var r,
            e =
              (function (r) {
                if (Array.isArray(r)) return r;
              })(
                (r = (0, o.useState)(
                  document.body.classList.contains("dark-theme"),
                )),
              ) ||
              (function (r, e) {
                var t,
                  n,
                  i =
                    null == r
                      ? null
                      : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                        r["@@iterator"];
                if (null != i) {
                  var a = [],
                    o = !0,
                    g = !1;
                  try {
                    for (
                      i = i.call(r);
                      !(o = (t = i.next()).done) &&
                      (a.push(t.value), a.length !== e);
                      o = !0
                    );
                  } catch (r) {
                    (g = !0), (n = r);
                  } finally {
                    try {
                      o || null == i.return || i.return();
                    } finally {
                      if (g) throw n;
                    }
                  }
                  return a;
                }
              })(r, 2) ||
              (function (r, e) {
                if (r) {
                  if ("string" == typeof r) return K(r, 2);
                  var t = Object.prototype.toString.call(r).slice(8, -1);
                  if (
                    ("Object" === t &&
                      r.constructor &&
                      (t = r.constructor.name),
                    "Map" === t || "Set" === t)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return K(r, e);
                }
              })(r, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
            t = e[0],
            n = e[1];
          return (
            (0, o.useEffect)(function () {
              var r = new MutationObserver(function () {
                n(document.body.classList.contains("dark-theme"));
              });
              return (
                r.observe(document.body, { attributeFilter: ["class"] }),
                function () {
                  r.disconnect();
                }
              );
            }, []),
            t ? "dark" : "light"
          );
        },
        V = window.Roblox.ui,
        Q = (0, V.createCache)(),
        Z = function (r) {
          var e = r.children,
            t = J();
          return (0, u.jsx)(V.CacheProvider, {
            cache: Q,
            children: (0, u.jsx)(V.UIThemeProvider, {
              theme: t,
              cssBaselineMode: "disabled",
              children: e,
            }),
          });
        },
        rr = t(470),
        re = function () {
          var r = J();
          return (0, o.useMemo)(
            function () {
              return "dark" === r ? rr.FoundationDark : rr.FoundationLight;
            },
            [r],
          );
        },
        rt = "9.13.0",
        rn = globalThis;
      function ri() {
        return ra(rn), rn;
      }
      function ra(r) {
        var e = (r.__SENTRY__ = r.__SENTRY__ || {});
        return (e.version = e.version || rt), (e[rt] = e[rt] || {});
      }
      function ro(r, e) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rn,
          n = (t.__SENTRY__ = t.__SENTRY__ || {}),
          i = (n[rt] = n[rt] || {});
        return i[r] || (i[r] = e());
      }
      function rg() {
        return Date.now() / 1e3;
      }
      var ru = (function () {
        var r = rn.performance;
        if (!(null == r ? void 0 : r.now)) return rg;
        var e = Date.now() - r.now(),
          t = void 0 == r.timeOrigin ? e : r.timeOrigin;
        return function () {
          return (t + r.now()) / 1e3;
        };
      })();
      function rb() {
        var r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : rn.crypto || rn.msCrypto,
          e = function () {
            return 16 * Math.random();
          };
        try {
          if (null == r ? void 0 : r.randomUUID)
            return r.randomUUID().replace(/-/g, "");
          (null == r ? void 0 : r.getRandomValues) &&
            (e = function () {
              var e = new Uint8Array(1);
              return r.getRandomValues(e), e[0];
            });
        } catch (r) {}
        return "10000000100040008000100000000000".replace(
          /[018]/g,
          function (r) {
            return (r ^ ((15 & e()) >> (r / 4))).toString(16);
          },
        );
      }
      var rc = Object.prototype.toString,
        rl = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function rs(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      var r_ = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        rd = {};
      function rS(r) {
        if (!("console" in rn)) return r();
        var e = rn.console,
          t = {},
          n = Object.keys(rd);
        n.forEach(function (r) {
          var n = rd[r];
          (t[r] = e[r]), (e[r] = n);
        });
        try {
          return r();
        } finally {
          n.forEach(function (r) {
            e[r] = t[r];
          });
        }
      }
      var rf = ro("logger", function () {
          var r = !1,
            e = {
              enable: function () {
                r = !0;
              },
              disable: function () {
                r = !1;
              },
              isEnabled: function () {
                return r;
              },
            };
          return (
            rl
              ? r_.forEach(function (t) {
                  e[t] = function () {
                    for (
                      var e = arguments.length, n = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      n[i] = arguments[i];
                    r &&
                      rS(function () {
                        var r;
                        (r = rn.console)[t].apply(
                          r,
                          [
                            "".concat("Sentry Logger ", "[").concat(t, "]:"),
                          ].concat(
                            (function (r) {
                              if (Array.isArray(r)) return rs(r);
                            })(n) ||
                              (function (r) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != r[Symbol.iterator]) ||
                                  null != r["@@iterator"]
                                )
                                  return Array.from(r);
                              })(n) ||
                              (function (r, e) {
                                if (r) {
                                  if ("string" == typeof r)
                                    return rs(r, void 0);
                                  var t = Object.prototype.toString
                                    .call(r)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === t &&
                                      r.constructor &&
                                      (t = r.constructor.name),
                                    "Map" === t || "Set" === t)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === t ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t,
                                    )
                                  )
                                    return rs(r, e);
                                }
                              })(n) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })(),
                          ),
                        );
                      });
                  };
                })
              : r_.forEach(function (r) {
                  e[r] = function () {};
                }),
            e
          );
        }),
        rh = "_sentrySpan";
      function rp(r, e) {
        e
          ? (function (r, e, t) {
              try {
                Object.defineProperty(r, e, {
                  value: t,
                  writable: !0,
                  configurable: !0,
                });
              } catch (t) {
                rl &&
                  rf.log(
                    'Failed to add non-enumerable property "'.concat(
                      e,
                      '" to object',
                    ),
                    r,
                  );
              }
            })(r, rh, e)
          : delete r[rh];
      }
      function rm(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function ry(r, e, t) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = t),
          r
        );
      }
      function rv(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable;
              }),
            )),
            n.forEach(function (e) {
              ry(r, e, t[e]);
            });
        }
        return r;
      }
      function rF(r, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
            : (function (r, e) {
                var t = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(r);
                  t.push.apply(t, n);
                }
                return t;
              })(Object(e)).forEach(function (t) {
                Object.defineProperty(
                  r,
                  t,
                  Object.getOwnPropertyDescriptor(e, t),
                );
              }),
          r
        );
      }
      function rB(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return rm(r);
          })(r) ||
          (function (r) {
            if (
              ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r["@@iterator"]
            )
              return Array.from(r);
          })(r) ||
          (function (r, e) {
            if (r) {
              if ("string" == typeof r) return rm(r, void 0);
              var t = Object.prototype.toString.call(r).slice(8, -1);
              if (
                ("Object" === t && r.constructor && (t = r.constructor.name),
                "Map" === t || "Set" === t)
              )
                return Array.from(t);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return rm(r, e);
            }
          })(r) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var rk = (function () {
          var r;
          function e() {
            (function (r, e) {
              if (!(r instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._attachments = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {}),
              (this._propagationContext = {
                traceId: rb(),
                sampleRand: Math.random(),
              });
          }
          return (
            (r = [
              {
                key: "clone",
                value: function () {
                  var r = new e();
                  return (
                    (r._breadcrumbs = rB(this._breadcrumbs)),
                    (r._tags = rv({}, this._tags)),
                    (r._extra = rv({}, this._extra)),
                    (r._contexts = rv({}, this._contexts)),
                    this._contexts.flags &&
                      (r._contexts.flags = {
                        values: rB(this._contexts.flags.values),
                      }),
                    (r._user = this._user),
                    (r._level = this._level),
                    (r._session = this._session),
                    (r._transactionName = this._transactionName),
                    (r._fingerprint = this._fingerprint),
                    (r._eventProcessors = rB(this._eventProcessors)),
                    (r._attachments = rB(this._attachments)),
                    (r._sdkProcessingMetadata = rv(
                      {},
                      this._sdkProcessingMetadata,
                    )),
                    (r._propagationContext = rv({}, this._propagationContext)),
                    (r._client = this._client),
                    (r._lastEventId = this._lastEventId),
                    rp(r, this[rh]),
                    r
                  );
                },
              },
              {
                key: "setClient",
                value: function (r) {
                  this._client = r;
                },
              },
              {
                key: "setLastEventId",
                value: function (r) {
                  this._lastEventId = r;
                },
              },
              {
                key: "getClient",
                value: function () {
                  return this._client;
                },
              },
              {
                key: "lastEventId",
                value: function () {
                  return this._lastEventId;
                },
              },
              {
                key: "addScopeListener",
                value: function (r) {
                  this._scopeListeners.push(r);
                },
              },
              {
                key: "addEventProcessor",
                value: function (r) {
                  return this._eventProcessors.push(r), this;
                },
              },
              {
                key: "setUser",
                value: function (r) {
                  return (
                    (this._user = r || {
                      email: void 0,
                      id: void 0,
                      ip_address: void 0,
                      username: void 0,
                    }),
                    this._session &&
                      (function (r) {
                        var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        if (
                          (!e.user ||
                            (!r.ipAddress &&
                              e.user.ip_address &&
                              (r.ipAddress = e.user.ip_address),
                            r.did ||
                              e.did ||
                              (r.did =
                                e.user.id || e.user.email || e.user.username)),
                          (r.timestamp = e.timestamp || ru()),
                          e.abnormal_mechanism &&
                            (r.abnormal_mechanism = e.abnormal_mechanism),
                          e.ignoreDuration &&
                            (r.ignoreDuration = e.ignoreDuration),
                          e.sid && (r.sid = 32 === e.sid.length ? e.sid : rb()),
                          void 0 !== e.init && (r.init = e.init),
                          !r.did && e.did && (r.did = "".concat(e.did)),
                          "number" == typeof e.started &&
                            (r.started = e.started),
                          r.ignoreDuration)
                        )
                          r.duration = void 0;
                        else if ("number" == typeof e.duration)
                          r.duration = e.duration;
                        else {
                          var t = r.timestamp - r.started;
                          r.duration = t >= 0 ? t : 0;
                        }
                        e.release && (r.release = e.release),
                          e.environment && (r.environment = e.environment),
                          !r.ipAddress &&
                            e.ipAddress &&
                            (r.ipAddress = e.ipAddress),
                          !r.userAgent &&
                            e.userAgent &&
                            (r.userAgent = e.userAgent),
                          "number" == typeof e.errors && (r.errors = e.errors),
                          e.status && (r.status = e.status);
                      })(this._session, { user: r }),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "getUser",
                value: function () {
                  return this._user;
                },
              },
              {
                key: "setTags",
                value: function (r) {
                  return (
                    (this._tags = rv({}, this._tags, r)),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setTag",
                value: function (r, e) {
                  return (
                    (this._tags = rF(rv({}, this._tags), ry({}, r, e))),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setExtras",
                value: function (r) {
                  return (
                    (this._extra = rv({}, this._extra, r)),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setExtra",
                value: function (r, e) {
                  return (
                    (this._extra = rF(rv({}, this._extra), ry({}, r, e))),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setFingerprint",
                value: function (r) {
                  return (
                    (this._fingerprint = r), this._notifyScopeListeners(), this
                  );
                },
              },
              {
                key: "setLevel",
                value: function (r) {
                  return (this._level = r), this._notifyScopeListeners(), this;
                },
              },
              {
                key: "setTransactionName",
                value: function (r) {
                  return (
                    (this._transactionName = r),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setContext",
                value: function (r, e) {
                  return (
                    null === e
                      ? delete this._contexts[r]
                      : (this._contexts[r] = e),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "setSession",
                value: function (r) {
                  return (
                    r ? (this._session = r) : delete this._session,
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "getSession",
                value: function () {
                  return this._session;
                },
              },
              {
                key: "update",
                value: function (r) {
                  if (!r) return this;
                  var t = "function" == typeof r ? r(this) : r,
                    n =
                      (t instanceof e
                        ? t.getScopeData()
                        : rc.call(t) === "[object ".concat("Object", "]")
                          ? r
                          : void 0) || {},
                    i = n.tags,
                    a = n.extra,
                    o = n.user,
                    g = n.contexts,
                    u = n.level,
                    b = n.fingerprint,
                    c = void 0 === b ? [] : b,
                    l = n.propagationContext;
                  return (
                    (this._tags = rv({}, this._tags, i)),
                    (this._extra = rv({}, this._extra, a)),
                    (this._contexts = rv({}, this._contexts, g)),
                    o && Object.keys(o).length && (this._user = o),
                    u && (this._level = u),
                    c.length && (this._fingerprint = c),
                    l && (this._propagationContext = l),
                    this
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  return (
                    (this._breadcrumbs = []),
                    (this._tags = {}),
                    (this._extra = {}),
                    (this._user = {}),
                    (this._contexts = {}),
                    (this._level = void 0),
                    (this._transactionName = void 0),
                    (this._fingerprint = void 0),
                    (this._session = void 0),
                    rp(this, void 0),
                    (this._attachments = []),
                    this.setPropagationContext({
                      traceId: rb(),
                      sampleRand: Math.random(),
                    }),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "addBreadcrumb",
                value: function (r, e) {
                  var t,
                    n = "number" == typeof e ? e : 100;
                  if (n <= 0) return this;
                  var i = rF(rv({ timestamp: rg() }, r), {
                    message: r.message
                      ? (function (r) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          return "string" != typeof r || 0 === e
                            ? r
                            : r.length <= e
                              ? r
                              : "".concat(r.slice(0, e), "...");
                        })(r.message, 2048)
                      : r.message,
                  });
                  return (
                    this._breadcrumbs.push(i),
                    this._breadcrumbs.length > n &&
                      ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
                      null === (t = this._client) ||
                        void 0 === t ||
                        t.recordDroppedEvent("buffer_overflow", "log_item")),
                    this._notifyScopeListeners(),
                    this
                  );
                },
              },
              {
                key: "getLastBreadcrumb",
                value: function () {
                  return this._breadcrumbs[this._breadcrumbs.length - 1];
                },
              },
              {
                key: "clearBreadcrumbs",
                value: function () {
                  return (
                    (this._breadcrumbs = []), this._notifyScopeListeners(), this
                  );
                },
              },
              {
                key: "addAttachment",
                value: function (r) {
                  return this._attachments.push(r), this;
                },
              },
              {
                key: "clearAttachments",
                value: function () {
                  return (this._attachments = []), this;
                },
              },
              {
                key: "getScopeData",
                value: function () {
                  return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: this[rh],
                  };
                },
              },
              {
                key: "setSDKProcessingMetadata",
                value: function (r) {
                  return (
                    (this._sdkProcessingMetadata = (function r(e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 2;
                      if (
                        !t ||
                        (void 0 === t
                          ? "undefined"
                          : t &&
                              "undefined" != typeof Symbol &&
                              t.constructor === Symbol
                            ? "symbol"
                            : typeof t) != "object" ||
                        n <= 0
                      )
                        return t;
                      if (e && 0 === Object.keys(t).length) return e;
                      var i = (function (r) {
                        for (var e = 1; e < arguments.length; e++) {
                          var t = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(t);
                          "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                              Object.getOwnPropertySymbols(t).filter(
                                function (r) {
                                  return Object.getOwnPropertyDescriptor(t, r)
                                    .enumerable;
                                },
                              ),
                            )),
                            n.forEach(function (e) {
                              var n;
                              (n = t[e]),
                                e in r
                                  ? Object.defineProperty(r, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                    })
                                  : (r[e] = n);
                            });
                        }
                        return r;
                      })({}, e);
                      for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) &&
                          (i[a] = r(i[a], t[a], n - 1));
                      return i;
                    })(this._sdkProcessingMetadata, r, 2)),
                    this
                  );
                },
              },
              {
                key: "setPropagationContext",
                value: function (r) {
                  return (this._propagationContext = r), this;
                },
              },
              {
                key: "getPropagationContext",
                value: function () {
                  return this._propagationContext;
                },
              },
              {
                key: "captureException",
                value: function (r, e) {
                  var t = (null == e ? void 0 : e.event_id) || rb();
                  if (!this._client)
                    return (
                      rf.warn(
                        "No client configured on scope - will not capture exception!",
                      ),
                      t
                    );
                  var n = Error("Sentry syntheticException");
                  return (
                    this._client.captureException(
                      r,
                      rF(
                        rv({ originalException: r, syntheticException: n }, e),
                        { event_id: t },
                      ),
                      this,
                    ),
                    t
                  );
                },
              },
              {
                key: "captureMessage",
                value: function (r, e, t) {
                  var n = (null == t ? void 0 : t.event_id) || rb();
                  if (!this._client)
                    return (
                      rf.warn(
                        "No client configured on scope - will not capture message!",
                      ),
                      n
                    );
                  var i = Error(r);
                  return (
                    this._client.captureMessage(
                      r,
                      e,
                      rF(
                        rv({ originalException: r, syntheticException: i }, t),
                        { event_id: n },
                      ),
                      this,
                    ),
                    n
                  );
                },
              },
              {
                key: "captureEvent",
                value: function (r, e) {
                  var t = (null == e ? void 0 : e.event_id) || rb();
                  return (
                    this._client
                      ? this._client.captureEvent(
                          r,
                          rF(rv({}, e), { event_id: t }),
                          this,
                        )
                      : rf.warn(
                          "No client configured on scope - will not capture event!",
                        ),
                    t
                  );
                },
              },
              {
                key: "_notifyScopeListeners",
                value: function () {
                  var r = this;
                  this._notifyingListeners ||
                    ((this._notifyingListeners = !0),
                    this._scopeListeners.forEach(function (e) {
                      e(r);
                    }),
                    (this._notifyingListeners = !1));
                },
              },
            ]),
            (function (r, e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            })(e.prototype, r),
            e
          );
        })(),
        rz = (function () {
          var r;
          function e(r, t) {
            var n, i;
            (function (r, e) {
              if (!(r instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              (n = r || new rk()),
              (i = t || new rk()),
              (this._stack = [{ scope: n }]),
              (this._isolationScope = i);
          }
          return (
            (r = [
              {
                key: "withScope",
                value: function (r) {
                  var e,
                    t,
                    n = this,
                    i = this._pushScope();
                  try {
                    t = r(i);
                  } catch (r) {
                    throw (this._popScope(), r);
                  }
                  return (null == (e = t) ? void 0 : e.then) &&
                    "function" == typeof e.then
                    ? t.then(
                        function (r) {
                          return n._popScope(), r;
                        },
                        function (r) {
                          throw (n._popScope(), r);
                        },
                      )
                    : (this._popScope(), t);
                },
              },
              {
                key: "getClient",
                value: function () {
                  return this.getStackTop().client;
                },
              },
              {
                key: "getScope",
                value: function () {
                  return this.getStackTop().scope;
                },
              },
              {
                key: "getIsolationScope",
                value: function () {
                  return this._isolationScope;
                },
              },
              {
                key: "getStackTop",
                value: function () {
                  return this._stack[this._stack.length - 1];
                },
              },
              {
                key: "_pushScope",
                value: function () {
                  var r = this.getScope().clone();
                  return (
                    this._stack.push({ client: this.getClient(), scope: r }), r
                  );
                },
              },
              {
                key: "_popScope",
                value: function () {
                  return !(this._stack.length <= 1) && !!this._stack.pop();
                },
              },
            ]),
            (function (r, e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            })(e.prototype, r),
            e
          );
        })();
      function rO() {
        var r = ra(ri());
        return (r.stack =
          r.stack ||
          new rz(
            ro("defaultCurrentScope", function () {
              return new rk();
            }),
            ro("defaultIsolationScope", function () {
              return new rk();
            }),
          ));
      }
      function rL(r) {
        return rO().withScope(r);
      }
      function rw(r, e) {
        var t = rO();
        return t.withScope(function () {
          return (t.getStackTop().scope = r), e(r);
        });
      }
      function rE(r) {
        return rO().withScope(function () {
          return r(rO().getIsolationScope());
        });
      }
      function rM(r) {
        var e = ra(r);
        return e.acs
          ? e.acs
          : {
              withIsolationScope: rE,
              withScope: rL,
              withSetScope: rw,
              withSetIsolationScope: function (r, e) {
                return rE(e);
              },
              getCurrentScope: function () {
                return rO().getScope();
              },
              getIsolationScope: function () {
                return rO().getIsolationScope();
              },
            };
      }
      function rP(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      function rA() {
        return rM(ri()).getCurrentScope();
      }
      function rT() {
        for (var r = arguments.length, e = Array(r), t = 0; t < r; t++)
          e[t] = arguments[t];
        var n = rM(ri());
        if (2 === e.length) {
          var i =
              (function (r) {
                if (Array.isArray(r)) return r;
              })(e) ||
              (function (r, e) {
                var t,
                  n,
                  i =
                    null == r
                      ? null
                      : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                        r["@@iterator"];
                if (null != i) {
                  var a = [],
                    o = !0,
                    g = !1;
                  try {
                    for (
                      i = i.call(r);
                      !(o = (t = i.next()).done) &&
                      (a.push(t.value), a.length !== e);
                      o = !0
                    );
                  } catch (r) {
                    (g = !0), (n = r);
                  } finally {
                    try {
                      o || null == i.return || i.return();
                    } finally {
                      if (g) throw n;
                    }
                  }
                  return a;
                }
              })(e, 2) ||
              (function (r, e) {
                if (r) {
                  if ("string" == typeof r) return rP(r, 2);
                  var t = Object.prototype.toString.call(r).slice(8, -1);
                  if (
                    ("Object" === t &&
                      r.constructor &&
                      (t = r.constructor.name),
                    "Map" === t || "Set" === t)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  )
                    return rP(r, e);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
            a = i[0],
            o = i[1];
          return a ? n.withSetScope(a, o) : n.withScope(o);
        }
        return n.withScope(e[0]);
      }
      var rW = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "propagationContext",
      ];
      function rj(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
        return n;
      }
      var rI =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function rC(r) {
        return {
          protocol: r.protocol,
          publicKey: r.publicKey || "",
          pass: r.pass || "",
          host: r.host,
          port: r.port || "",
          path: r.path || "",
          projectId: r.projectId,
        };
      }
      var rD = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function rH() {
        var r =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!rn.document) {
          rD &&
            rf.error("Global document not defined in showReportDialog call");
          return;
        }
        var e = rA(),
          t = e.getClient(),
          n = null == t ? void 0 : t.getDsn();
        if (!n) {
          rD && rf.error("DSN not configured for showReportDialog call");
          return;
        }
        if (
          (e &&
            (r.user = (function (r) {
              for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {},
                  n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(t).filter(function (r) {
                      return Object.getOwnPropertyDescriptor(t, r).enumerable;
                    }),
                  )),
                  n.forEach(function (e) {
                    var n;
                    (n = t[e]),
                      e in r
                        ? Object.defineProperty(r, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[e] = n);
                  });
              }
              return r;
            })({}, e.getUser(), r.user)),
          !r.eventId)
        ) {
          var i = rM(ri()).getIsolationScope().lastEventId();
          i && (r.eventId = i);
        }
        var a = rn.document.createElement("script");
        (a.async = !0),
          (a.crossOrigin = "anonymous"),
          (a.src = (function (r, e) {
            var t,
              n,
              i = (function (r) {
                var e =
                  "string" == typeof r
                    ? (function (r) {
                        var e,
                          t = rI.exec(r);
                        if (!t) {
                          rS(function () {
                            console.error("Invalid Sentry Dsn: ".concat(r));
                          });
                          return;
                        }
                        var n =
                            (function (r) {
                              if (Array.isArray(r)) return r;
                            })((e = t.slice(1))) ||
                            (function (r, e) {
                              var t,
                                n,
                                i =
                                  null == r
                                    ? null
                                    : ("undefined" != typeof Symbol &&
                                        r[Symbol.iterator]) ||
                                      r["@@iterator"];
                              if (null != i) {
                                var a = [],
                                  o = !0,
                                  g = !1;
                                try {
                                  for (
                                    i = i.call(r);
                                    !(o = (t = i.next()).done) &&
                                    (a.push(t.value), a.length !== e);
                                    o = !0
                                  );
                                } catch (r) {
                                  (g = !0), (n = r);
                                } finally {
                                  try {
                                    o || null == i.return || i.return();
                                  } finally {
                                    if (g) throw n;
                                  }
                                }
                                return a;
                              }
                            })(e, 6) ||
                            (function (r, e) {
                              if (r) {
                                if ("string" == typeof r) return rj(r, 6);
                                var t = Object.prototype.toString
                                  .call(r)
                                  .slice(8, -1);
                                if (
                                  ("Object" === t &&
                                    r.constructor &&
                                    (t = r.constructor.name),
                                  "Map" === t || "Set" === t)
                                )
                                  return Array.from(t);
                                if (
                                  "Arguments" === t ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    t,
                                  )
                                )
                                  return rj(r, e);
                              }
                            })(e, 6) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })(),
                          i = n[0],
                          a = n[1],
                          o = n[2],
                          g = n[3],
                          u = n[4],
                          b = n[5],
                          c = "",
                          l = void 0 === b ? "" : b,
                          s = l.split("/");
                        if (
                          (s.length > 1 &&
                            ((c = s.slice(0, -1).join("/")), (l = s.pop())),
                          l)
                        ) {
                          var _ = l.match(/^\d+/);
                          _ && (l = _[0]);
                        }
                        return rC({
                          host: void 0 === g ? "" : g,
                          pass: void 0 === o ? "" : o,
                          path: c,
                          projectId: l,
                          port: void 0 === u ? "" : u,
                          protocol: i,
                          publicKey: a,
                        });
                      })(r)
                    : rC(r);
                if (
                  e &&
                  (function (r) {
                    if (!rl) return !0;
                    var e = r.port,
                      t = r.projectId,
                      n = r.protocol;
                    return (
                      !["protocol", "publicKey", "host", "projectId"].find(
                        function (e) {
                          return (
                            !r[e] &&
                            (rf.error(
                              "Invalid Sentry Dsn: ".concat(e, " missing"),
                            ),
                            !0)
                          );
                        },
                      ) &&
                      (t.match(/^\d+$/)
                        ? "http" !== n && "https" !== n
                          ? (rf.error(
                              "Invalid Sentry Dsn: Invalid protocol ".concat(n),
                            ),
                            !1)
                          : !(e && isNaN(parseInt(e, 10))) ||
                            (rf.error(
                              "Invalid Sentry Dsn: Invalid port ".concat(e),
                            ),
                            !1)
                        : (rf.error(
                            "Invalid Sentry Dsn: Invalid projectId ".concat(t),
                          ),
                          !1))
                    );
                  })(e)
                )
                  return e;
              })(r);
            if (!i) return "";
            var a = "".concat(
                ((t = i.protocol ? "".concat(i.protocol, ":") : ""),
                (n = i.port ? ":".concat(i.port) : ""),
                ""
                  .concat(t, "//")
                  .concat(i.host)
                  .concat(n)
                  .concat(i.path ? "/".concat(i.path) : "", "/api/")),
                "embed/error-page/",
              ),
              o = "dsn=".concat(
                (function (r) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    t = r.host,
                    n = r.path,
                    i = r.pass,
                    a = r.port,
                    o = r.projectId,
                    g = r.protocol,
                    u = r.publicKey;
                  return (
                    ""
                      .concat(g, "://")
                      .concat(u)
                      .concat(e && i ? ":".concat(i) : "") +
                    "@"
                      .concat(t)
                      .concat(a ? ":".concat(a) : "", "/")
                      .concat(n ? "".concat(n, "/") : n)
                      .concat(o)
                  );
                })(i),
              );
            for (var g in e)
              if ("dsn" !== g && "onClose" !== g) {
                if ("user" === g) {
                  var u = e.user;
                  if (!u) continue;
                  u.name && (o += "&name=".concat(encodeURIComponent(u.name))),
                    u.email &&
                      (o += "&email=".concat(encodeURIComponent(u.email)));
                } else
                  o += "&"
                    .concat(encodeURIComponent(g), "=")
                    .concat(encodeURIComponent(e[g]));
              }
            return "".concat(a, "?").concat(o);
          })(n, r)),
          r.onLoad && (a.onload = r.onLoad);
        var o = r.onClose;
        if (o) {
          var g = function (r) {
            if ("__sentry_reportdialog_closed__" === r.data)
              try {
                o();
              } finally {
                rn.removeEventListener("message", g);
              }
          };
          rn.addEventListener("message", g);
        }
        var u = rn.document.head || rn.document.body;
        u
          ? u.appendChild(a)
          : rD &&
            rf.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      var rR = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function rx(r) {
        return (rx = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(r);
      }
      function rG(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable;
              }),
            )),
            n.forEach(function (e) {
              var n;
              (n = t[e]),
                e in r
                  ? Object.defineProperty(r, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[e] = n);
            });
        }
        return r;
      }
      function rN(r, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
            : (function (r, e) {
                var t = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(r);
                  t.push.apply(t, n);
                }
                return t;
              })(Object(e)).forEach(function (t) {
                Object.defineProperty(
                  r,
                  t,
                  Object.getOwnPropertyDescriptor(e, t),
                );
              }),
          r
        );
      }
      function rY(r, e) {
        return (rY =
          Object.setPrototypeOf ||
          function (r, e) {
            return (r.__proto__ = e), r;
          })(r, e);
      }
      function rX() {
        try {
          var r = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (r) {}
        return (rX = function () {
          return !!r;
        })();
      }
      var rq = { componentStack: null, error: null, eventId: null },
        rU = (function (r) {
          var e;
          function t(r) {
            (function (r, e) {
              if (!(r instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
              (a = t),
              (o = [r]),
              (a = rx(a)),
              (((e = this),
              (g =
                (n = rX()
                  ? Reflect.construct(a, o || [], rx(this).constructor)
                  : a.apply(this, o)) &&
                ("object" ==
                  ((i = n) &&
                  "undefined" != typeof Symbol &&
                  i.constructor === Symbol
                    ? "symbol"
                    : typeof i) ||
                  "function" == typeof n)
                  ? n
                  : (function (r) {
                      if (void 0 === r)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return r;
                    })(e))).state = rq),
              (g._openFallbackReportDialog = !0);
            var e,
              n,
              i,
              a,
              o,
              g,
              u = rA().getClient();
            return (
              u &&
                r.showDialog &&
                ((g._openFallbackReportDialog = !1),
                (g._cleanupHook = u.on("afterSendEvent", function (e) {
                  !e.type &&
                    g._lastEventId &&
                    e.event_id === g._lastEventId &&
                    rH(
                      rN(rG({}, r.dialogOptions), { eventId: g._lastEventId }),
                    );
                }))),
              g
            );
          }
          return (
            (function (r, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function",
                );
              (r.prototype = Object.create(e && e.prototype, {
                constructor: { value: r, writable: !0, configurable: !0 },
              })),
                e && rY(r, e);
            })(t, r),
            (e = [
              {
                key: "componentDidCatch",
                value: function (r, e) {
                  var t = this,
                    n = e.componentStack,
                    i = this.props,
                    a = i.beforeCapture,
                    g = i.onError,
                    u = i.showDialog,
                    b = i.dialogOptions;
                  rT(function (i) {
                    a && a(i, r, n);
                    var c = (function (r, e, t) {
                      var n = e.componentStack;
                      if (
                        null !== (i = o.version.match(/^([^.]+)/)) &&
                        parseInt(i[0]) >= 17 &&
                        (function (r) {
                          switch (rc.call(r)) {
                            case "[object Error]":
                            case "[object Exception]":
                            case "[object DOMException]":
                            case "[object WebAssembly.Exception]":
                              return !0;
                            default:
                              return (function (r, e) {
                                try {
                                  return r instanceof e;
                                } catch (r) {
                                  return !1;
                                }
                              })(r, Error);
                          }
                        })(r) &&
                        n
                      ) {
                        var i,
                          a,
                          g = Error(r.message);
                        (g.name = "React ErrorBoundary ".concat(r.name)),
                          (g.stack = n),
                          (a = new WeakSet()),
                          (function r(e, t) {
                            if (!a.has(e)) {
                              if (e.cause) return a.add(e), r(e.cause, t);
                              e.cause = t;
                            }
                          })(r, g);
                      }
                      return rT(function (e) {
                        var i;
                        return (
                          e.setContext("react", { componentStack: n }),
                          rA().captureException(
                            r,
                            t
                              ? (i = t) instanceof rk ||
                                "function" == typeof i ||
                                Object.keys(t).some(function (r) {
                                  return rW.includes(r);
                                })
                                ? { captureContext: t }
                                : t
                              : void 0,
                          )
                        );
                      });
                    })(r, e, {
                      mechanism: {
                        handled:
                          null != t.props.handled
                            ? t.props.handled
                            : !!t.props.fallback,
                      },
                    });
                    g && g(r, n, c),
                      u &&
                        ((t._lastEventId = c),
                        t._openFallbackReportDialog &&
                          rH(rN(rG({}, b), { eventId: c }))),
                      t.setState({ error: r, componentStack: n, eventId: c });
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var r = this.props.onMount;
                  r && r();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var r = this.state,
                    e = r.error,
                    t = r.componentStack,
                    n = r.eventId,
                    i = this.props.onUnmount;
                  i && (this.state === rq ? i(null, null, null) : i(e, t, n)),
                    this._cleanupHook &&
                      (this._cleanupHook(), (this._cleanupHook = void 0));
                },
              },
              {
                key: "resetErrorBoundary",
                value: function () {
                  var r = this.props.onReset,
                    e = this.state,
                    t = e.error,
                    n = e.componentStack,
                    i = e.eventId;
                  r && r(t, n, i), this.setState(rq);
                },
              },
              {
                key: "render",
                value: function () {
                  var r = this,
                    e = this.props,
                    t = e.fallback,
                    n = e.children,
                    i = this.state;
                  if (null === i.componentStack)
                    return "function" == typeof n ? n() : n;
                  var a =
                    "function" == typeof t
                      ? o.createElement(t, {
                          error: i.error,
                          componentStack: i.componentStack,
                          resetError: function () {
                            return r.resetErrorBoundary();
                          },
                          eventId: i.eventId,
                        })
                      : t;
                  return o.isValidElement(a)
                    ? a
                    : (t &&
                        rR &&
                        rf.warn(
                          "fallback did not produce a valid ReactElement",
                        ),
                      null);
                },
              },
            ]),
            (function (r, e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(r, n.key, n);
              }
            })(t.prototype, e),
            t
          );
        })(o.Component),
        r$ = window.ReactDOM,
        rK = function (r, e, t) {
          (0, r$.render)((0, u.jsx)(rU, { children: r }), e, t);
        };
      a(["Roblox", "core-scripts", "react"], r),
        a(
          "ReactUtilities",
          (function (r) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (r) {
                    return Object.getOwnPropertyDescriptor(t, r).enumerable;
                  }),
                )),
                n.forEach(function (e) {
                  var n;
                  (n = t[e]),
                    e in r
                      ? Object.defineProperty(r, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[e] = n);
                });
            }
            return r;
          })({}, e),
        );
    })();
})(),
  window.Roblox &&
    window.Roblox.BundleDetector &&
    window.Roblox.BundleDetector.bundleDetected("ReactUtilities");
//# debugId=e4158dcd-e3a8-46b9-96f7-885a92237b8b
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/reactUtilities-ea1ec47671936014.js.map
