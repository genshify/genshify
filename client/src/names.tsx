import type { ArtifactSetKey } from 'genshin-optimizer/consts'
import { Translate } from './libs/GO-files/Components/Translate'

export function artifactTr(setKey: ArtifactSetKey) {
  return <Translate ns="artifactNames_gen" key18={setKey} />
}
