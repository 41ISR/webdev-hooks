const PageSettings = () => {
    return (
        <section className="page" id="page-settings">
            <div className="page-header">
                <h1 className="page-title">Settings</h1>
                <p className="page-subtitle">
                    Your profile and notification preferences
                </p>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.3 useState (controlled form)">
                <div
                    className="settings-section mount-point"
                    id="mount-profile">
                    <div className="settings-heading">Profile</div>
                    <p className="settings-desc">
                        This is how your name appears to the rest of the pod.
                    </p>
                    <div className="profile-row">
                        <div className="profile-preview-avatar">AM</div>
                        <div className="field-group">
                            <label className="field-label">Display name</label>
                            <input
                                className="input"
                                style={{ width: '100%' }}
                                value="Alex Morgan"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.4 useState (object vs. separate state)">
                <div
                    className="settings-section mount-point"
                    id="mount-notif-prefs">
                    <div className="settings-heading">Notifications</div>
                    <p className="settings-desc">
                        Choose how the pod can reach you.
                    </p>
                    <div className="pref-row">
                        <div>
                            <div className="pref-title">Email</div>
                            <div className="pref-desc">
                                Daily digest of board activity
                            </div>
                        </div>
                        <span className="switch on"></span>
                    </div>
                    <div className="pref-row">
                        <div>
                            <div className="pref-title">Push</div>
                            <div className="pref-desc">
                                Mentions and assigned tasks
                            </div>
                        </div>
                        <span className="switch on"></span>
                    </div>
                    <div className="pref-row">
                        <div>
                            <div className="pref-title">Desktop</div>
                            <div className="pref-desc">
                                Build status changes
                            </div>
                        </div>
                        <span className="switch"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageSettings
