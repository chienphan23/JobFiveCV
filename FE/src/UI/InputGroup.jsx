import { ErrorText } from "./ErrorText";
import { InputRequire } from "./InputRequire";

export const InputGroup = ({
    label,
    placeholder,
    inputValue,
    onChangeFns,
    colGroup,
    typeInput,
    require,
    errorText,
}) => {
    return (
        <div className={`form-group col-lg-${colGroup}`}>
            {/* <div className="row mb-3"> */}
            {/* <div className={`col-lg-${colLabel}`}> */}
            <label
            //   style={{ fontSize: "18px", lineHeight: "38px" }}
            >
                {label}: {require && <InputRequire />}
            </label>
            {/* </div> */}
            {/* <div className={`col-lg-${colInput}`}> */}
            <input
                type={typeInput ? typeInput : "text"}
                className="form-control"
                placeholder={placeholder}
                style={{ height: "38px" }}
                value={inputValue}
                onChange={(e) => onChangeFns(e)}
            />
            {/* </div> */}
            <ErrorText errorText={errorText} mt={3} mb={3} />
        </div>
    );
};
