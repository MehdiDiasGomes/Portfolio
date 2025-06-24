export type Experience = {
  title: string;
  icon: string;
  organization: {
    title: string;
    subTitle: string;
    time: string;
    list: {
      parag: string;
      usedTechnos: string;
      technos: string;
    }[];
  };
};
