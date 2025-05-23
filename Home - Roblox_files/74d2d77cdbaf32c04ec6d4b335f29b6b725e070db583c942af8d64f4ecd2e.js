var Roblox = Roblox || {};
Roblox.LangDynamic = Roblox.LangDynamic || {};
Roblox.LangDynamic["Amp.Upsell"] = {
  "Title.ParentalRequest": "Parental Request",
  "Description.ParentalRequestInCooldown":
    "You have already sent a request to your parent. Please wait for them to respond.",
  "Action.Cancel": "Cancel",
  "Action.AskNow": "Ask Now",
  "Action.VerifyID": "Verify ID",
  "Description.PrologueTextVpc": "You need parent permission.",
  "Description.PrologueConnectingTextIdvAndVpc":
    "first verify your ID. If you don't have an ID, ask your parent for permission.",
  "Title.AskYourParent": "Ask your parent",
  "Description.PrologueTextIdv": "First verify your age with an ID.",
  "Title.VerifyYourAge": "Verify Your Age",
  "Description.PrologueConnectingTextVpc": "you need parent permission.",
  "Description.PrologueConnectingTextIdv": "first verify your age with an ID.",
  "Description.PrologueTextIdvAndVpc":
    "First verify your ID. If you don't have an ID, ask your parent for permission.",
  "PrologueSetting.PromptLine.CanCorrectAge": "To update your birthday",
  "Message.EmailSent": "We’ve sent an email to {parentEmail}",
  "Message.EmailSentPluralParent": "We’ve sent an email to your linked parents",
  "Action.EmailMyParent": "Ask My Parent",
  "Title.RequestSent": "Request sent",
  "Message.AlreadyLinked": "Your account is already linked to this parent",
  "PrologueSetting.PromptLine.CanChangeSetting": "To join this experience",
  "Description.PrologueEnablePurchase":
    "Due to regional restrictions, you need parent permission to make this purchase.",
  "Description.PrologueUnblockUser":
    "To unblock {displayName}, you need parent permission",
  "Description.PrologueUnblockExperience":
    "To unblock {experienceName}, you need parent permission",
  "Action.AskNowLowercase": "Ask now",
  "Description.PrologueEnablePurchaseExpT1":
    "Due to regional restrictions, you need parent permission to make this purchase.{lineBreak}You’ll need your parent’s help for a few minutes. Make sure you have a parent nearby.",
};
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected(
    "DynamicLocalizationResourceScript_Amp.Upsell",
  );
