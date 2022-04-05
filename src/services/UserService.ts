import {AxiosResponse} from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";
import {AuthResponse} from "../models/response/AuthResponse";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}