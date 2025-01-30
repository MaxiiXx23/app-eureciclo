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
  Initial: undefined
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
  ConfirmCollect: {
    id: number
  }
}


type ActivitiesStackParamList = {
  Initial: {
    isInProcess: boolean
  }
  Verify: {
    id: number
  }
  ConfirmCollect: {
    id: number
  }
}

type ProfileStackParamList = {
  ProfileInitial: undefined
  Donation: undefined
  Help: undefined
  Profile: undefined
  Address: {
    type: number
  }
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

type ProfileConfigStackParamList = {
  ProfileScreen: undefined
  Name: undefined
  Phone: undefined
  Email: undefined
  Description: undefined
}

type AdminCompanyStackParamList = {
  AdminInitial: undefined
  Address: {
    type: number,
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
  CollectoresStackParamList,
  ProfileConfigStackParamList,
  AdminCompanyStackParamList,
}
