type AuthStackParamList = {
  LoginScreen: undefined
  ChooseRegisterScreen: undefined
  RegisterClientScreen: undefined
  RegisterCollector: undefined
  RegisterBusinessRouter: undefined
}

type HomeStackParamList = {
  Home: undefined
  Collect: undefined
  Activities: undefined
  Account: undefined
}

type CollectStackParamList = {
  CollectInitial: undefined
  Request: undefined
  Status: undefined
  Camera: undefined
  Verify: undefined
  Address: undefined
}


type ActivitiesStackParamList = {
  ActivitiesInitial: undefined
}

type ProfileStackParamList = {
  ProfileInitial: undefined
  Donation: undefined
  Help: undefined
  Profile: undefined
}

type RegisterCollectorStackParamList = {
  RegisterCollectorInitial: undefined
  RegisterCollectiorInfo: undefined
  LoginScreen: undefined
}

type RegisterBusinessStackParamList = {
  RegisterBusinessInitial: undefined
  RegisterBusiness: undefined
  RegisterPlanBusinessInfo: undefined
  LoginScreen: undefined
}


export { 
  AuthStackParamList, 
  HomeStackParamList, 
  CollectStackParamList, 
  ActivitiesStackParamList,
  ProfileStackParamList,
  RegisterCollectorStackParamList,
  RegisterBusinessStackParamList
}
