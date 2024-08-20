import { connect } from "react-redux";

const UnkoComponent1 =  ({counter44}) => {
    return (
        <>
            <h2> idi unko component == {counter44.value} </h2>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("mapState ===> ", state)
    return {
        counter44: state.counter44
    }
}

export default connect(mapStateToProps)(UnkoComponent1)

// https://stackoverflow.com/questions/36212860/subscribe-to-single-property-change-in-store-in-redux

/*
    state anedi CENTRAL... okkate untundi
    adi "store" lo create chestaamu...
    inka anni components ---> "mapStateToProps" method dwaara present state ento telusukuntaaru
*/