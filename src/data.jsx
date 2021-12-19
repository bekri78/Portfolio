import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line react-hooks/rules-of-hooks
export default function Data(props) {
  const [t] = useTranslation("global");
  useEffect(() => {
    props.data([
      {
        title: "AlphaB",
        image:
          "https://siecledigital.fr/wp-content/uploads/2020/12/tech_for_good.jpg",
        description: t("portfolio.alphaB"),
        project: "https://alphabbb.herokuapp.com/",
        github: "https://github.com/bekri78/AlphaB",
        githubDispo: true,
      },
      {
        title: "Leads Pompe a chaleur",
        image:
          "https://www.ceder-provence.org/wp-content/uploads/2019/10/pompes-%C3%A0-chaleur-800x300.jpg",
        description: t("portfolio.pompe"),
        project: "https://bekri78.github.io/testePompe/",
        github: "https://github.com/bekri78/testePompe",
        githubDispo: true,
      },
      {
        title: "Registre",
        image:
          "https://cdn.radiofrance.fr/s3/cruiser-production/2020/12/4716f11c-2d64-4c5c-9812-406db943b187/870x489_technicentre.webp",
        description: t("portfolio.registre"),
        project: "https://tour-en-fosse.herokuapp.com/",
        github: "Desolé ce repository est privée",
        githubDispo: false,
      },
      {
        title: " interface ",
        image:
          "https://www.transilien.com/sites/transilien/files/styles/diapo_crop/public/K905_nc_petit.jpg?h=31930a62&itok=gz2VBI5f",
        description: t("portfolio.interface"),
        project: "https://tood-list-sncf.herokuapp.com/",
        github: "Desolé ce repository est privée",
        githubDispo: false,
      },
      {
        title: "Simpson Api",
        image: "https://www.tomsguide.fr/content/uploads/sites/2/2021/05/s.jpg",
        description: t("portfolio.simpson"),
        project: "https://codesandbox.io/s/elastic-stitch-tfo12",
        github: "Desolé ce repository est privée",
        githubDispo: false,
      },
      {
        title: "Express Food",
        image:
          "https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE=",
        description: t("portfolio.food"),
        project: "https://bekri78.github.io/expressFood/",
        github: "https://github.com/bekri78/recupp7",
        githubDispo: true,
      },
      {
        title: "generateur de citation",
        image:
          "https://www.showbizjunkies.com/wp-content/gallery/mib3-photos/mib3-tommy-lee-jones-will-smith.jpg",
        description: t("portfolio.citation"),
        project:
          "https://bekri78.github.io/generateur-de-citation-P5-Openclassrooms/",
        github:
          "https://github.com/bekri78/generateur-de-citation-P5-Openclassrooms",
        githubDispo: true,
      },
      {
        title: "One Piece Game",
        image:
          "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/05/06/node_749505/46982263/public/2020/05/06/B9723396273Z.1_20200506170704_000%2BG02FVMCAG.1-0.jpg?itok=qntyo5h_1588777631",
        description: t("portfolio.onePiece"),
        project: "http://one-piece-game.fr/",
        github:
          "https://github.com/bekri78/generateur-de-citation-P5-Openclassrooms",
        githubDispo: true,
      },
      {
        title: "Chalet & Caviare",
        image:
          "https://prod-saint-gobain-fr.content.saint-gobain.io/sites/saint-gobain.fr/files/2020-07/01-renovation-chalet-conseils_0.jpg",
        description: t("portfolio.chalet"),
        project: "https://chaletscaviar.fr/",
        github: "Desolé ce repository est privée",
        githubDispo: false,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return <></>;
}
