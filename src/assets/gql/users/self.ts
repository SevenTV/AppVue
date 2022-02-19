import { EmoteSet } from "@/structures/EmoteSet";
import { User } from "@/structures/User";
import gql from "graphql-tag";

export const GetClientRequiredData = gql`
	query ClientRequiredData {
		clientUser: currentUser {
			id
			username
			display_name
			created_at
			avatar_url
			tag_color
			biography
			editors {
				user {
					id
					username
					display_name
					avatar_url
					tag_color
				}
			}
			roles {
				id
				name
				color
				allowed
				denied
				position
			}
			connections {
				id
				display_name
				platform
				linked_at
				emote_slots
				emote_set {
					id
					name
					emotes {
						id
					}
				}
			}
		}

		globalEmoteSet: namedEmoteSet(name: GLOBAL) {
			id
			name
			emotes {
				id
				name
				flags
			}
			emote_slots
		}
	}
`;

export interface ClientRequiredData {
	clientUser: User;
	globalEmoteSet: EmoteSet;
}