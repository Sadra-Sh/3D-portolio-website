// defines reusable styles to maintian styling across various componenets
// defines horizontal padding for differnet screen sizes

const styles = {
  // adds directional padding for different screen sizes
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // heading in hero section applying bold font and defines different text sizes for different screen sizes
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  // styling for sub heading in hero section
    heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  // section titles and size ranges from 60px on medium to 30px on small screens
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // section subtexts styling
    sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
