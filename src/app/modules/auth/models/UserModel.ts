import {AuthModel} from './AuthModel'
import {UserAddressModel} from './UserAddressModel'
import {UserCommunicationModel} from './UserCommunicationModel'
import {UserEmailSettingsModel} from './UserEmailSettingsModel'
import {UserSocialNetworksModel} from './UserSocialNetworksModel'

export interface UserModel {
    id: 4,
    clients: [
        {
            cltId: number,
            cltName: string,
            cltUrlDatabase: string,
            cltUserMod: string,
            cltCreatedAt: Date,
            cltUpdatedAt: Date,
            cltNitIdentifier: string,
            cltIsActive: boolean,
            cltEmail: string
        }
    ],
    notifications: [],
    last_login: Date,
    is_superuser: boolean,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_active: boolean,
    date_joined: Date,
    updated_at: null,
    usermod: null,
    password_change: null,
    init_date_validity: Date,
    end_date_validity: Date,
    groups: [],
    user_permissions: [],
    notfId: [],
    couId: [],
    permId: [],
    rolId: []
}