import { getTrackBackground, Range } from "react-range";

const InputRange = ({ STEP, MIN, MAX, values, handleChanges }) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '3px',
              width: '100%',
              background: getTrackBackground({
                values: values,
                colors: ["#EDEDED", "#0989FF", "#EDEDED"],
                min: MIN,
                max: MAX
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '17px',
              width: '5px',
              backgroundColor: '#0989FF',
              backgroundColor: isDragged ? "#0989FF" : "#0989FF"
            }}
          />
        )}
      />
    </>
  );
};


export default InputRange;
