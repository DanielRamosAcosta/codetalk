import { OrganizerId } from '../../../shared/domain/ids/OrganizerId'
import { DomainEvent } from '../../../shared/domain/events/DomainEvent'
import { DomainEventCode } from '../../../shared/domain/events/DomainEventCode'

export class TalkAssignedForReview extends DomainEvent {
  constructor(private readonly talkId: string, private readonly reviewerId: OrganizerId) {
    super(DomainEventCode.TALK_ASSIGNED_FOR_REVIEW)
  }
}
