import React from 'react'
import PropTypes from 'prop-types'
import CompactShowLayout, { compactShowLayoutPropTypes } from './CompactShowLayout'

const BoxedShowLayout = props => {
    return (
        <CompactShowLayout
            {...props}
            layoutComponentTypeCheck={
                (field) => (
                    field.type == undefined ||
                    field.type.displayName !== 'Styled(MuiBox)')}
        />
    )
}

BoxedShowLayout.propTypes = {
    ...compactShowLayoutPropTypes
}

export default BoxedShowLayout
