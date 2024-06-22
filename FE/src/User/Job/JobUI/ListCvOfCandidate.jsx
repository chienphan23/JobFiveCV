import CvOfCandidate from "./CvOfCandidate";

function ListCvOfCandidate({ listCv, selected, setSelected }) {
    return (
        <div className="text-left mt-3">
            {listCv.data.length != 0 ? (
                listCv.data.map((cv) => (
                    <CvOfCandidate
                        cv={cv}
                        key={cv.cvId}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))
            ) : (
                <CvOfCandidate
                    // cv={cv}
                    // key={cv.cvId}
                    selected={selected}
                    setSelected={setSelected}
                />
            )}
        </div>
    );
}

export default ListCvOfCandidate;
