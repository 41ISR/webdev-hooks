const PagePeople = () => {
    return (
        <section className="page" id="page-people">
            <div className="page-header">
                <h1 className="page-title">People</h1>
                <p className="page-subtitle">Growth pod, 6 members</p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.2 fetch by id · 2.4 useEffect cleanup (timer)">
                <div className="mount-point people-layout" id="mount-people">
                    <div className="member-list">
                        <div className="member-item selected">
                            <span className="avatar-chip">AM</span>
                            <div>
                                <div className="member-name">Alex Morgan</div>
                                <div className="member-role">Engineering</div>
                            </div>
                        </div>
                        <div className="member-item">
                            <span className="avatar-chip">SK</span>
                            <div>
                                <div className="member-name">Sasha Kim</div>
                                <div className="member-role">Design</div>
                            </div>
                        </div>
                        <div className="member-item">
                            <span className="avatar-chip">JD</span>
                            <div>
                                <div className="member-name">Jules Dubois</div>
                                <div className="member-role">Product</div>
                            </div>
                        </div>
                        <div className="member-item">
                            <span className="avatar-chip">RN</span>
                            <div>
                                <div className="member-name">Riya Nair</div>
                                <div className="member-role">Engineering</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-panel">
                        <div className="detail-header">
                            <div className="detail-avatar">AM</div>
                            <div>
                                <div className="detail-name">Alex Morgan</div>
                                <div className="detail-meta">
                                    Engineering · 4 tasks in progress
                                </div>
                            </div>
                        </div>

                        <div className="section-title">
                            Time tracking on this task
                        </div>
                        <div className="timer-block">
                            <span className="timer-value">00:14:32</span>
                            <div className="timer-controls">
                                <button className="btn ghost">Pause</button>
                                <button className="btn ghost">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PagePeople
