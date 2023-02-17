export default ({ image }) => (
  <img
    alt="..."
    src={
      typeof window !== "undefined"
        ? window.webkitURL.createObjectURL(image)
        : ""
    }
  />
);
