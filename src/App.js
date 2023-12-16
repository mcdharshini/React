


// import List from "./Day6/List"
// import List1 from "./Day6/List1"
// import List2 from "./Day6/List2"
// import BasicButtons from "./Day6/List3"
// import ArrowProps from "./day4props/ArrowsProps"
// import DefaultProps from "./day4props/DefaultProps"
// import DynamicRendering from "./day4props/DynamicRendering"
// import Parent from "./day4props/ParentChildCommunication"
// import PropsClass from "./day4props/PropsClass"
// import PropsFunctional from "./day4props/PropsFunctional"
// import PropsFunctionalEx1 from "./day4props/PropsFunctionalEx1"
// import StateClassCom from "./day4props/StateClassCom"
// import StateFunction from "./day4props/StateFunction"
// import StateHoldObject from "./day4props/StateHoldObject"
// import TwoWayBinding from "./day4props/TwoWayBinding"
// import IconButtons from "./Day6/Icon"
// import ErrorBoundary from "./Day8/ErrorBoundary";
// import Hero from "./Day8/Hero";
// import TryCatch from "./Day8/TryCatch";

import ComponentLifeCycle from "./Component/Day8/ComponentLifeCycle";
import LifecycleFunctional from "./Component/Day8/LifecycleFunction";

export default function App(){
  return(
    <div>
      {/* <PropsFunctional name ="Dharshini"></PropsFunctional>
      <PropsClass college="skct"></PropsClass>
      <PropsFunctionalEx1 college ="Krishna" place="coimbatore"></PropsFunctionalEx1>
      <ArrowProps place="Kovai"></ArrowProps>
      <StateClassCom></StateClassCom>
      <StateFunction></StateFunction>
      <StateHoldObject></StateHoldObject>
      <Parent></Parent>
      <DynamicRendering></DynamicRendering>
      <TwoWayBinding></TwoWayBinding>
      <DefaultProps></DefaultProps>
       <List></List>
      <List1></List1>
      <List2></List2>
       <BasicButtons></BasicButtons>
      <IconButtons></IconButtons> */}
      {/* <ErrorBoundary>
       <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="dona"></Hero>
        </ErrorBoundary> 
        <TryCatch fruit="root"></TryCatch>*/}
        <ComponentLifeCycle></ComponentLifeCycle>
        <LifecycleFunctional></LifecycleFunctional>
      
    </div>
  )
}