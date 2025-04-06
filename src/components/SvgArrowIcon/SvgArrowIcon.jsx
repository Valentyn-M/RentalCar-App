// Arrow for selects
const SvgArrowIcon = (props) => {
  const svgIcon = '/sprite.svg';
  return (
    <svg {...props} width="16" height="16">
      <use href={`${svgIcon}#icon-arrow-default`} />
    </svg>
  );
};

export default SvgArrowIcon;
