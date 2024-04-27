import type {
  ArtifactSetKey,
  ArtifactSlotKey,
  CharacterKey,
  GenderKey,
  WeaponKey,
} from "genshin-optimizer/consts";
import { charKeyToLocGenderedCharKey } from "genshin-optimizer/consts";
import artifacts from "./artifacts.json";
import chars from "./chars.json";
import weapons from "./weapons.json";

export * from "./assets";

type characterAssetKey =
  | "icon"
  | "iconSide"
  | "banner"
  | "bar"
  | "skill"
  | "burst"
  | "passive1"
  | "passive2"
  | "passive3"
  | "constellation1"
  | "constellation2"
  | "constellation3"
  | "constellation4"
  | "constellation5"
  | "constellation6"
  | "sprint"
  | "passive";

const url = "https://enka.network/ui/";
export function characterAsset(
  ck: CharacterKey,
  asset: characterAssetKey,
  gender: GenderKey = "F"
): string {
  switch (asset) {
    case "icon":
    case "iconSide":
      return url + chars[charKeyToLocGenderedCharKey(ck, gender)][asset] ?? ""; //gender specific
    default:
      return (
        url + (chars[ck] as Record<characterAssetKey, string>)[asset] ?? ""
      );
  }
}
export function artifactAsset(
  ak: ArtifactSetKey,
  slotKey: ArtifactSlotKey
): string {
  if (
    ak === "PrayersForDestiny" ||
    ak === "PrayersForIllumination" ||
    ak === "PrayersForWisdom" ||
    ak === "PrayersToSpringtime"
  )
    return url + artifacts[ak].circlet;
  else return url + artifacts[ak][slotKey] ?? "";
}
export function weaponAsset(wk: WeaponKey, empowered = true) {
  return (
    url + weapons[wk][empowered ? "awakenIcon" : "icon"] ??
    weapons[wk]["icon"] ??
    ""
  );
}
