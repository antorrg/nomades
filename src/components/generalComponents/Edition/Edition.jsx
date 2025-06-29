import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import style from './Edition.module.css';
import { useAuth } from '../../../Auth/AuthContext';

const Edition = forwardRef(({ allowedRoles, userEditId, text, onClick, className, disabled, title, isDualCondition= false}, ref) => {
  const customClass = className || style.button;
  const { user } = useAuth();
  const [isAllowed, setIsAllowed] = useState(false);

  const checkPermission = useCallback(() => {
    if (!user) return false;

    const isRoleAllowed = allowedRoles.includes(user.role);
    const isEdittingOwnProfile = userEditId ? user.id === userEditId : false;
    if(isDualCondition){return isRoleAllowed && isEdittingOwnProfile;}
    return isRoleAllowed || isEdittingOwnProfile;
  }, [user, allowedRoles, userEditId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAllowed(checkPermission());
    }, 50);

    return () => clearTimeout(timer);
  }, [checkPermission]);

  if (!isAllowed) return null;
  const renderTitle = title? title : text

  return <button ref={ref} onClick={onClick} className={customClass} disabled={disabled} title={renderTitle}>{text}</button>;
});

Edition.displayName = 'Edition';

export default Edition;
