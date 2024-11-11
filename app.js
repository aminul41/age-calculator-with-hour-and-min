const getDifferenceFromNow = (fromDate) => {
  let difference = Date.now() - new Date(fromDate).getTime();
  difference = difference / 1000; // difference second
  // console.log(difference);

  let weekDifference = Math.floor(difference / 604800);
  difference -= weekDifference * 604800;

  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  // console.log(difference);

  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  let message;

  if (weekDifference > 0) {
    message = `${weekDifference} week`;
  }
  if (hourDifference > 0) {
    message = `${message} ${hourDifference} hour`;
  }

  if (minuteDifference > 0) {
    message = message
      ? `${message} ${minuteDifference} minutes`
      : `${minuteDifference} minutes`;
  }
  if (difference > 0) {
    message = message
      ? `${message} ${Math.round(difference)} seconds`
      : `${Math.round(difference)} seconds`;
  }
  return message;
};
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const formEl = document.querySelector("#datTime");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullDateString = `${dateEl.value}T${timeEl.value}:00`;
  // console.log("formEl.addEventListener ~ fullDateString:", fullDateString);
  const date = new Date(fullDateString);
  // console.log("formEl.addEventListener ~ date:", date);
  console.log("getDifferenceFromNow:", getDifferenceFromNow(date));
});
