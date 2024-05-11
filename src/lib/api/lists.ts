import axios, { AxiosResponse } from 'axios';
import { Manufacturer } from '../types/manufactorer';
import { Model } from '../types/model';
import { Category } from '../types/category';

export const getManufacturers = async (): Promise<Manufacturer[]> => {
  try {
    const response: AxiosResponse<any[]> = await axios.get<Manufacturer[]>(
      'https://static.my.ge/myauto/js/mans.json',
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Manufacturer:', error);
    throw error;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response: AxiosResponse<{ data: Category[] }> = await axios.get<{
      data: Category[];
    }>(`https://api2.myauto.ge/ka/cats/get`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProducts = async (queryParams?: URLSearchParams) => {
  try {
    const url = 'https://api2.myauto.ge/ka/products/';
    const response = await axios.get(url, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Products:', error);
    throw error;
  }
};

export const getModelsByManufactorer = async (id: string): Promise<Model[]> => {
  try {
    const response: AxiosResponse<{ data: Model[] }> = await axios.get<{
      data: Model[];
    }>(`https://api2.myauto.ge/ka/getManModels?man_id=${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};
