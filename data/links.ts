export type LinkItem = {
  platform: string;
  handle: string;
  description: string;
  url: string;
  status: "active" | "coming-soon";
};

export const links: LinkItem[] = [
  {
    platform: "X",
    handle: "@SusumuMind",
    description: "AI画像・リアル系キャラクター",
    url: "https://x.com/SusumuMind",
    status: "active",
  },
  {
    platform: "Pixiv",
    handle: "pixiv",
    description: "オリジナルキャラクター作品集",
    url: "https://www.pixiv.net/users/122797541",
    status: "active",
  },
  {
    platform: "note",
    handle: "note",
    description: "思考法・AI活用コンテンツ",
    url: "https://note.com/apt_bonobo9074",
    status: "active",
  },
  {
    platform: "YouTube",
    handle: "@susumu0430",
    description: "SusumuMind チャンネル",
    url: "https://www.youtube.com/@susumu0430",
    status: "active",
  },
];
