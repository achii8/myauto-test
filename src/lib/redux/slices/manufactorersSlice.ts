import {
  Action,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { RootState } from '../store'
import { getManufacturers, getModelsByManufactorer } from '../../api/lists'
import { AppThunk } from '../types'
import { Manufacturer } from '../../types/manufactorer'
import { Model } from '../../types/model'

interface ManufacturerState {
  manufacturersById: Record<string, Manufacturer>
  manufacturersArray: Manufacturer[]
  modelsByManufacturer: Record<string, Record<number, Model>>
  loading: boolean
}

const initialState: ManufacturerState = {
  manufacturersById: {},
  manufacturersArray: [],
  modelsByManufacturer: {},
  loading: false,
}

const manufacturersSlice = createSlice({
  name: 'manufacturers',
  initialState,
  reducers: {
    setManufacturers: (state, action: PayloadAction<Manufacturer[]>) => {
      state.manufacturersById = action.payload.reduce(
        (acc, manufacturer) => ({
          ...acc,
          [manufacturer.man_id]: manufacturer,
        }),
        {},
      )
      state.manufacturersArray = action.payload
    },
    setModelsForManufacturer(
      state,
      action: PayloadAction<{ manufacturerId: string; models: Model[] }>,
    ) {
      const { manufacturerId, models } = action.payload
      state.modelsByManufacturer[manufacturerId] = models.reduce(
        (acc, model) => ({
          ...acc,
          [model.model_id]: model,
        }),
        {},
      )
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setManufacturers, setModelsForManufacturer, setLoading } =
  manufacturersSlice.actions

export const fetchManufacturers =
  (): AppThunk =>
  async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    try {
      dispatch(setLoading(true))
      const manufacturersData = await getManufacturers()
      dispatch(setManufacturers(manufacturersData))
      for (const manufacturer of manufacturersData) {
        const models = await getModelsByManufactorer(manufacturer.man_id)
        dispatch(
          setModelsForManufacturer({
            manufacturerId: manufacturer.man_id,
            models,
          }),
        )
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.error('Error fetching manufacturers:', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export default manufacturersSlice.reducer
