import { HttpStatus } from '@nestjs/common'
import DomainErrorCode from '../../domain/errors/DomainErrorCode'

// Please, maintain this enum alphabetically ordered
const domainErrorToHttpStatusCode: Record<DomainErrorCode, number> = {
  [DomainErrorCode.BOOK_NOT_FOUND_ERROR]: HttpStatus.NOT_FOUND,
}

export default domainErrorToHttpStatusCode