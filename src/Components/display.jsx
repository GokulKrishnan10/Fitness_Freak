import "./display.css";
export default function Display() {
  return (
    <div className="flex">
      <p>
        This question concerns a browser with full css3 support including
        flexbox. I have a flex container with some items in it. They are all
        justified to flex-start but I want the last .end item to be justified to
        flex-end. Is there a good way to do this without modifying the HTML and
        without resorting to absolute positioning?
      </p>
    </div>
  );
}
