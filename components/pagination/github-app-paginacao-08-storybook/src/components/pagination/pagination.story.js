'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  // no index está sendo feito o replace do %page
  <Pagination total={10} pageLink='http://mypage.com/page/%page%' />
))
