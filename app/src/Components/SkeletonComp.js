import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function SkeletonComp() {

    return (
        <div>
            <Row>
                <Col className="Col-skeleton" sm={12} md={6} lg={6}>
                    <Row>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton width="100%" height={200} className="Skaleton" variant="rectangular" />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton className="Skaleton" variant="text" />
                                <Skeleton className="Skaleton" variant="rectangular" width="100%" height={118} />
                            </Stack></Col>
                    </Row>
                </Col>
                <Col className="Col-skeleton" sm={12} md={6} lg={6}>
                    <Row>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton width="100%" height={200} className="Skaleton" variant="rectangular" />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton className="Skaleton" variant="text" />
                                <Skeleton className="Skaleton" variant="rectangular" width="100%" height={118} />
                            </Stack></Col>
                    </Row>
                </Col>
                <Col className="Col-skeleton" sm={12} md={6} lg={6}>
                    <Row>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton width="100%" height={200} className="Skaleton" variant="rectangular" />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton className="Skaleton" variant="text" />
                                <Skeleton className="Skaleton" variant="rectangular" width="100%" height={118} />
                            </Stack></Col>
                    </Row>
                </Col>
                <Col className="Col-skeleton" sm={12} md={6} lg={6}>
                    <Row>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton width="100%" height={200} className="Skaleton" variant="rectangular" />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack spacing={1}>
                                <Skeleton className="Skaleton" variant="text" />
                                <Skeleton className="Skaleton" variant="rectangular" width="100%" height={118} />
                            </Stack></Col>
                    </Row>
                </Col>
            </Row>


        </div>
    )
}

export default SkeletonComp;