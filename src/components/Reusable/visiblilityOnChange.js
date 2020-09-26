function onChange(onVis, id,animationClass) {
  console.log(onVis);
  if (onVis) {
    document.getElementById(id).classList.add(animationClass);
  }
}

export default onChange;
