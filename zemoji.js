/*!
 * Zemoji v1.0.0
 *
 * https://github.com/zenabus
 *
 * Copyright (c) 2020 Francisco Ibañez III
 * Free to use under the MIT license.
 */

(function(){
  const zemojis=document.getElementsByClassName('zemoji');
  for (const zemoji of zemojis) {
    switch (zemoji.classList[1]) {
      case'grin':e='😀';break;
      case'grin2':e='😃';break;
      case'grin3':e='😄';break;
      case'grin4':e='😆';break;
      case'grin5':e='😅';break;
      case'grin6':e='😁';break;
      case'rofl':e='🤣';break;
      case'toj':e='😂';break;
      case'smile':e='🙂';break;
      case'smile2':e='🙃';break;
      case'smile3':e='😊';break;
      case'wink':e='😉';break;
      case'halo':e='😇';break;
      case'hearts':e='🥰';break;
      case'heart-eyes':e='😍';break;
      case'star-eyes':e='🤩';break;
      case'money-eyes':e='🤑';break;
      case'roll-eyes':e='🙄';break;
      case'kiss':e='😗';break;
      case'kiss2':e='😚';break;
      case'kiss3':e='😘';break;
      case'kiss4':e='😙';break;
      case'tongue':e='😋';break;
      case'tongue2':e='😛';break;
      case'tongue3':e='😜';break;
      case'tongue4':e='🤪';break;
      case'tongue5':e='😝';break;
      case'hug':e='🤗';break;
      case'cover-mouth':e='🤭';break;
      case'shushing':e='🤫';break;
      case'thinking':e='🤔';break;
      case'zipper':e='🤐';break;
      case'eyebrow':e='🤨';break;
      case'flat':e='😐';break;
      case'flat2':e='😑';break;
      case'no-mouth':e='😶';break;
      case'smirking':e='😏';break;
      case'unamused':e='😒';break;
      case'grimacing':e='😬';break;
      case'long-nose':e='🤥';break;
      case'sleepy':e='😪';break;
      case'sleepy2':e='😴';break;
      case'drool':e='🤤';break;
      case'mask':e='😷';break;
      case'thermometer':e='🤒';break;
      case'bandage':e='🤕';break;
      case'vomit':e='🤢';break;
      case'vomit2':e='🤮';break;
      case'sneeze':e='🤧';break;
      case'hot':e='🥵';break;
      case'cold':e='🥶';break;
      case'woozy':e='🥴';break;
      case'dizzy':e='😵';break;
      case'explode':e='🤯';break;
      case'cowboy':e='🤠';break;
      case'party':e='🥳';break;
      case'sunglasses':e='😎';break;
      case'eyeglasses':e='🤓';break;
      case'monocle':e='🧐';break;
      case'confused':e='😕';break;
      case'worried':e='😟';break;
      case'frown':e='🙁';break;
      case'frown2':e='😦';break;
      case'frown3':e='😌';break;
      case'frown4':e='😔';break;
      case'wow':e='😮';break;
      case'wow2':e='😯';break;
      case'wow3':e='😲';break;
      case'flushed':e='😳';break;
      case'pleading':e='🥺';break;
      case'anguish':e='😧';break;
      case'fearful':e='😨';break;
      case'anxious':e='😰';break;
      case'sad':e='😥';break;
      case'cry':e='😢';break;
      case'cry2':e='😭';break;
      case'scream':e='😱';break;
      case'confounded':e='😖';break;
      case'preserving':e='😣';break;
      case'disappointed':e='😞';break;
      case'downcast':e='😓';break;
      case'weary':e='😩';break;
      case'tired':e='😫';break;
      case'yawning':e='🥱';break;
      case'nose-steam':e='😤';break;
      case'angry':e='😠';break;
      case'angry2':e='😡';break;
      case'bad-mouth':e='🤬';break;
      case'devil':e='😈';break;
      case'devil2':e='👿';break;
      default:e='💋';break;
    }
    zemoji.style.fontSize=zemoji.classList[2]
    zemoji.innerHTML= e
  }
})()