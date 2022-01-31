from enum import Enum

class FriendRequestStatus(Enum): # check friend request status
    REQUEST_NOT_SENT = 0
    YOU_TO_ME = 1
    ME_TO_YOU = 2

    def get_friend_request_status(sender, receiver):
        try:
            return FriendRequest.object.get(sender = sender, receiver = receiver, is_active = True)
        except FriendRequest.DoesNotExist:
            return False