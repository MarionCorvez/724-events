import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

describe("Icon component", () => {
  describe("When an icon is created with name twitch", () => {
    it("the icon contains this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
      render(<Icon name="twitch" />);
      expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
        "327fbc38c8e878259c3ec35ef231517a"
      );
    });
  });

  // Ajout d'un test unitaire pour vérifier que l'icône créée est bien celle de Facebook
  describe("When an icon is created with name facebook", () => {
    it("the icon contains this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
      render(<Icon name="facebook" />);
      expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
        "bbea4c9e40773b969fdb6e406059f853"
      );
    });
  });
});
