interface IRequestCreateReview {
  rating: number
  comment?: string
  reviewedUserId?: number
  collectId?: number
  companyId?: number
}

  
export { IRequestCreateReview }
  