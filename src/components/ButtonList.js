import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "songs",
    "live",
    "soccer",
    "cricket",
    "cooking",
    "valentines",
  ];
  return (
    <div className="flex">
      {btnList.map((eachBtn, index) => {
        return <Button key={index} name={eachBtn} />;
      })}
    </div>
  );
};

export default ButtonList;
