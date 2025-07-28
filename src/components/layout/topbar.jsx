import BreadCrumb from "../common/breadcrumb";

const TopBar = ({pathnames}) => {
  return (
    <>
      <div>
        <BreadCrumb pathnames={pathnames} />
      </div>
    </>
  );
};

export default TopBar;
