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
  Donation: undefined
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
  }
}

type CollectStackParamList = {
  Initial: undefined
  Request: undefined
  Status: undefined
  Camera: undefined
  Donation: undefined
  Address: {
    type: number
  }
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
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
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
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
  }
  Donation: undefined
}

type ProfileStackParamList = {
  ProfileInitial: undefined
  Donation: undefined
  Help: undefined
  Profile: undefined
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
  }
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
  Donation: undefined
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
  }
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
  Donation: undefined
  AdminInitial: undefined
  Address: {
    type: number,
    id: number
  }
  Notifications: undefined
  SendReview: {
    id: number
    type: number
    reviewedUserId?: number
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
