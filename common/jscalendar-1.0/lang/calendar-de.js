// ** I18N

// Calendar DE language
// Author: Jack (tR), <jack@jtr.de>
// Encoding: any
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("Sonntag",
 "Montag",
 "Dienstag",
 "Mittwoch",
 "Donnerstag",
 "Freitag",
 "Samstag",
 "Sonntag");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
Calendar._SDN_len = 2; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("So",
 "Mo",
 "Di",
 "Mi",
 "Do",
 "Fr",
 "Sa",
 "So");

// full month names
Calendar._MN = new Array
("Januar",
 "Februar",
 "M�rz",
 "April",
 "Mai",
 "Juni",
 "Juli",
 "August",
 "September",
 "Oktober",
 "November",
 "Dezember");

// short month names
Calendar._SMN = new Array
("Jan",
 "Feb",
 "M�r",
 "Apr",
 "May",
 "Jun",
 "Jul",
 "Aug",
 "Sep",
 "Okt",
 "Nov",
 "Dez");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "�ber dieses Kalendermodul";

Calendar._TT["ABOUT"] =
"Datum auswählen:\n" +
"- Benutzen Sie die <<, >> Buttons um das Jahr zu w�hlen\n" +
"- Benutzen Sie die <, > Buttons um den Monat zu w�hlen" +
"- Für eine Schnellauswahl halten Sie die Maustaste �ber diesen Buttons fest.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Zeit ausw�hlen:\n" +
"- Klicken Sie auf die Teile der Uhrzeit, um diese zu erh�hen\n" +
"- oder klicken Sie mit festgehaltener Shift-Taste um diese zu verringern\n" +
"- oder klicken und festhalten f�r Schnellauswahl.";

Calendar._TT["TOGGLE"] = "Ersten Tag der Woche w�hlen";
Calendar._TT["PREV_YEAR"] = "Voriges Jahr (Festhalten f�r Schnellauswahl)";
Calendar._TT["PREV_MONTH"] = "Voriger Monat (Festhalten f�r Schnellauswahl)";
Calendar._TT["GO_TODAY"] = "Heute ausw�hlen";
Calendar._TT["NEXT_MONTH"] = "N�chst. Monat (Festhalten f�r Schnellauswahl)";
Calendar._TT["NEXT_YEAR"] = "N�chst. Jahr (Festhalten f�r Schnellauswahl)";
Calendar._TT["SEL_DATE"] = "Datum ausw�hlen";
Calendar._TT["DRAG_TO_MOVE"] = "Zum Bewegen festhalten";
Calendar._TT["PART_TODAY"] = " (Heute)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "Woche beginnt mit %s ";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Schlie�en";
Calendar._TT["TODAY"] = "Heute";
Calendar._TT["TIME_PART"] = "(Shift-)Klick oder Festhalten und Ziehen um den Wert zu �ndern";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d.%m.%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

Calendar._TT["WK"] = "wo";
Calendar._TT["TIME"] = "Zeit:";
