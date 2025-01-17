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
  Address: undefined
  Verify: {
    id?: number
  }
  ProfileInfoCompany: {
    id: number
  }
  SearchCollects: undefined
  SearchCompanies: undefined
  VerifyCollectsInProcess: {
    isInProcess: boolean
  }
}


type ActivitiesStackParamList = {
  ActivitiesInitial: {
    isInProcess: boolean
  }
  Verify: {
    id: number
  }
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

type CollectoresStackParamList = {
  CollectoresInitial: undefined
  InfoProfileUser: {
    id: number
  }
}


export { 
  AuthStackParamList, 
  HomeStackParamList, 
  CollectStackParamList, 
  ActivitiesStackParamList,
  ProfileStackParamList,
  RegisterCollectorStackParamList,
  RegisterBusinessStackParamList,
  CollectoresStackParamList
}
