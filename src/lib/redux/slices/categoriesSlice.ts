import { createSlice, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getCategories } from '../../api/lists'
import { AppThunk } from '../types'
import { Category } from '../../types/category'

interface CategoriesState {
  categoriesArray: { value: string; label: string }[]
}

const initialState: CategoriesState = {
  categoriesArray: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categoriesArray = action.payload.map((category) => ({
        value: category.category_id.toString(),
        label: category.title,
      }))
    },
  },
})

export const { setCategories } = categoriesSlice.actions

export const fetchCategories =
  (): AppThunk => async (dispatch: ThunkDispatch<RootState, unknown, any>) => {
    try {
      const categoryData = await getCategories()
      dispatch(setCategories(categoryData))
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

export default categoriesSlice.reducer
