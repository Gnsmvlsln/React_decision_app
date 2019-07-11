const isAdult=(a) => a>=18
const canDrink=(b) => b>21

export default (x) => x>65

export{ isAdult,canDrink }



//different ways to set default exports
// const isSenior=(x) => x>65

// export default(isSenior)

// export{ isAdult,canDrink ,isSenior as default}